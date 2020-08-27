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

/* global exports, require */

const authorManager = require('ep_etherpad-lite/node/db/AuthorManager');

let settings;

exports.authenticate = (hookName, {req}, cb) => {
  console.debug('ep_headerauth.authenticate');
  if (!settings.trustProxy) {
    console.warn(`ep_headerauth.authenticate: Failed authentication from IP ${req.ip} - trustProxy is not enabled`);
    return cb([false]);
  }
  const hs = settings.headerauth;
  const username = req.headers[hs.username_header];
  if (username == null) {
    console.warn(`ep_headerauth.authenticate: Failed authentication from IP ${req.ip} - missing ${hs.username_header} header`);
    for (const hdr in req.headers) {
      console.debug(`ep_headerauth.authenticate: Header: ${hdr}: ${req.headers[hdr]}`);
    }
    return cb([false]);
  }
  console.info(`ep_headerauth.authenticate: Successful authentication from IP ${req.ip} for user ${username}`);
  const users = settings.users;
  if (users[username] == null) users[username] = {};
  users[username].username = username;
  req.session.user = users[username];
  const displayname = req.headers[hs.displayname_header];
  if (displayname != null) {
    console.info(`ep_headerauth.authenticate: User ${username} has display name ${displayname}`);
    req.session.user.displayname = displayname;
  }
  return cb([true]);
};

exports.handleMessage = async (hookName, {client: {client: {request: {session}}}, message}) => {
  console.debug('ep_headerauth.handleMessage');
  if (session.user == null) {
    console.debug('ep_headerauth.handleMessage: user info missing from session');
    return;
  }
  const {displayname} = session.user;
  if (displayname == null) return;
  if (message.type === 'COLLABROOM' && message.data.type === 'USERINFO_UPDATE') {
    const {data: {userInfo} = {}} = message;
    if (userInfo != null && userInfo.name !== displayname) {
      console.debug(`ep_headerauth.handleMessage: overriding user's chosen name (${userInfo.name}) with ${displayname}`);
      userInfo.name = displayname;
    }
    return;
  }
  if (message.type !== 'CLIENT_READY') {
    return;
  }
  const {token} = message;
  if (token == null) {
    console.debug('ep_headerauth.handleMessage: token missing from CLIENT_READY message');
    return;
  }
  console.debug(`ep_headerauth.handleMessage: getting author ID for token ${token}`);
  const authorId = await authorManager.getAuthor4Token(token);
  console.debug(`ep_headerauth.handleMessage: Setting name for ${authorId} to ${displayname}`);
  authorManager.setAuthorName(authorId, displayname);
};

exports.loadSettings = (hookName, {settings: _settings}, cb) => {
  settings = _settings;
  if (settings.headerauth == null) settings.headerauth = {};
  const hs = settings.headerauth;
  if (hs.username_header == null) hs.username_header = 'x-authenticated-user';
  if (hs.displayname_header == null) hs.displayname_header = 'x-authenticated-name';
  return cb();
};
