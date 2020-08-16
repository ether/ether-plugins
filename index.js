// Copyright 2020 Richard Hansen
//
// Licensed under the Apache License, Version 2.0 (the "License"); you
// may not use this file except in compliance with the License. You
// may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied. See the License for the specific language governing
// permissions and limitations under the License.

var settings = require('ep_etherpad-lite/node/utils/Settings');
var authorManager = require('ep_etherpad-lite/node/db/AuthorManager');

exports.authenticate = function(hook_name, ctx, cb) {
  console.debug('ep_headerauth.authenticate');
  if (!settings.trustProxy) {
    console.warn(`ep_headerauth.authenticate: Failed authentication from IP ${ctx.req.ip} - trustProxy is not enabled`);
    return cb([false]);
  }
  var username_hdr = settings.headerauth.username_header;
  var username = ctx.req.headers[username_hdr];
  if (!username) {
    console.warn(`ep_headerauth.authenticate: Failed authentication from IP ${ctx.req.ip} - missing ${username_hdr} header`);
    for (var hdr in ctx.req.headers) {
      console.debug(`ep_headerauth.authenticate: Header: ${hdr}: ${ctx.req.headers[hdr]}`);
    }
    return cb([false]);
  }
  console.info(`ep_headerauth.authenticate: Successful authentication from IP ${ctx.req.ip} for user ${username}`);
  if (!(username in settings.users)) settings.users[username] = {};
  settings.users[username].username = username;
  ctx.req.session.user = settings.users[username];
  var displayname = ctx.req.headers[settings.headerauth.displayname_header];
  if (displayname) {
    console.info(`ep_headerauth.authenticate: User ${username} has display name ${displayname}`);
    ctx.req.session.user.displayname = displayname;
  }
  return cb([true]);
};

exports.expressConfigure = function(hook_name, ctx, cb) {
  if (!('headerauth' in settings)) settings.headerauth = {};
  if (!('username_header' in settings.headerauth))
    settings.headerauth.username_header = 'x-authenticated-user';
  if (!('displayname_header' in settings.headerauth))
    settings.headerauth.displayname_header = 'x-authenticated-name';
  return cb();
};

exports.handleMessage = async function(hook_name, ctx) {
  console.debug('ep_headerauth.handleMessage');
  var session = ctx.client.client.request.session;
  if (!('user' in session)) {
    console.debug('ep_headerauth.handleMessage: user info missing from session');
    return;
  }
  var displayname = session.user.displayname;
  if (!displayname) {
    return;
  }
  if (ctx.message.type === 'COLLABROOM' && ctx.message.data.type === 'USERINFO_UPDATE') {
    var get = (x, k, d) => { if (!(k in x)) return d; return x[k]; };
    var userinfo = get(get(get(ctx, 'message', {}), 'data', {}), 'userInfo', {});
    var wantname = userinfo.name;
    console.debug(`ep_headerauth.handleMessage: overriding user's chosen name (${wantname}) with ${displayname}`);
    userinfo.name = displayname;
    return;
  }
  if (ctx.message.type !== 'CLIENT_READY') {
    return;
  }
  var token = ctx.message.token;
  if (!token) {
    console.debug('ep_headerauth.handleMessage: token missing from CLIENT_READY message');
    return;
  }
  console.debug(`ep_headerauth.handleMessage: getting author ID for token ${token}`);
  var author_id = await authorManager.getAuthor4Token(token);
  console.debug(`ep_headerauth.handleMessage: Setting name for ${author_id} to ${displayname}`);
  authorManager.setAuthorName(author_id, displayname);
};
