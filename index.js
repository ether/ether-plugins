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

const settings = require('ep_etherpad-lite/node/utils/Settings');
const authorManager = require('ep_etherpad-lite/node/db/AuthorManager');

exports.authenticate = (hook_name, {req}, cb) => {
  console.debug('ep_headerauth.authenticate');
  if (!settings.trustProxy) {
    console.warn(`ep_headerauth.authenticate: Failed authentication from IP ${req.ip} - trustProxy is not enabled`);
    return cb([false]);
  }
  const {username_header} = settings.headerauth;
  const username = req.headers[username_header];
  if (!username) {
    console.warn(`ep_headerauth.authenticate: Failed authentication from IP ${req.ip} - missing ${username_header} header`);
    for (const hdr in req.headers) {
      console.debug(`ep_headerauth.authenticate: Header: ${hdr}: ${req.headers[hdr]}`);
    }
    return cb([false]);
  }
  console.info(`ep_headerauth.authenticate: Successful authentication from IP ${req.ip} for user ${username}`);
  if (!(username in settings.users)) settings.users[username] = {};
  settings.users[username].username = username;
  req.session.user = settings.users[username];
  const displayname = req.headers[settings.headerauth.displayname_header];
  if (displayname) {
    console.info(`ep_headerauth.authenticate: User ${username} has display name ${displayname}`);
    req.session.user.displayname = displayname;
  }
  return cb([true]);
};

exports.expressConfigure = (hook_name, ctx, cb) => {
  if (!('headerauth' in settings)) settings.headerauth = {};
  if (!('username_header' in settings.headerauth))
    settings.headerauth.username_header = 'x-authenticated-user';
  if (!('displayname_header' in settings.headerauth))
    settings.headerauth.displayname_header = 'x-authenticated-name';
  return cb();
};

exports.handleMessage = async (hook_name, {client: {client: {request: {session}}}, message}) => {
  console.debug('ep_headerauth.handleMessage');
  if (!('user' in session)) {
    console.debug('ep_headerauth.handleMessage: user info missing from session');
    return;
  }
  const {displayname} = session.user;
  if (!displayname) {
    return;
  }
  if (message.type === 'COLLABROOM' && message.data.type === 'USERINFO_UPDATE') {
    const {data: {userInfo} = {}} = message;
    if (userInfo && userInfo.name !== displayname) {
      console.debug(`ep_headerauth.handleMessage: overriding user's chosen name (${userInfo.name}) with ${displayname}`);
      userInfo.name = displayname;
    }
    return;
  }
  if (message.type !== 'CLIENT_READY') {
    return;
  }
  const {token} = message;
  if (!token) {
    console.debug('ep_headerauth.handleMessage: token missing from CLIENT_READY message');
    return;
  }
  console.debug(`ep_headerauth.handleMessage: getting author ID for token ${token}`);
  const author_id = await authorManager.getAuthor4Token(token);
  console.debug(`ep_headerauth.handleMessage: Setting name for ${author_id} to ${displayname}`);
  authorManager.setAuthorName(author_id, displayname);
};
