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
const log4js = require('ep_etherpad-lite/node_modules/log4js');

const logger = log4js.getLogger('ep_headerauth');
let settings;

exports.authenticate = (hookName, {req}, cb) => {
  logger.debug('authenticate');
  if (!settings.trustProxy) {
    logger.warn(`authenticate: Failed authentication from IP ${req.ip}: ` +
                'the trustProxy setting is not enabled');
    return cb([]);
  }
  const hs = settings.ep_headerauth;
  const username = req.headers[hs.username_header];
  if (username == null) {
    logger.warn(`authenticate: Failed authentication from IP ${req.ip}: ` +
                `the ${hs.username_header} header is missing`);
    for (const hdr in req.headers) {
      logger.debug(`authenticate: Header: ${hdr}: ${req.headers[hdr]}`);
    }
    return cb([]);
  }
  logger.info(`authenticate: Successful authentication from IP ${req.ip} for user ${username}`);
  const users = settings.users;
  if (users[username] == null) users[username] = {};
  users[username].username = username;
  req.session.user = users[username];
  const displayname = req.headers[hs.displayname_header];
  if (displayname != null) {
    logger.info(`authenticate: User ${username} has display name ${displayname}`);
    req.session.user.displayname = displayname;
  }
  return cb([true]);
};

exports.handleMessage = async (hookName, {client: {client: {request: {session}}}, message}) => {
  logger.debug('handleMessage');
  if (session.user == null) {
    logger.debug('handleMessage: User info missing from session');
    return;
  }
  const {displayname} = session.user;
  if (displayname == null) return;
  if (message.type === 'COLLABROOM' && message.data.type === 'USERINFO_UPDATE') {
    const {data: {userInfo} = {}} = message;
    if (userInfo != null && userInfo.name !== displayname) {
      logger.debug('handleMessage: Overriding the name chosen by the user ' +
                   `(${userInfo.name}) with ${displayname}`);
      userInfo.name = displayname;
    }
    return;
  }
  if (message.type !== 'CLIENT_READY') {
    return;
  }
  const {token} = message;
  if (token == null) {
    logger.debug('handleMessage: token missing from CLIENT_READY message');
    return;
  }
  logger.debug(`handleMessage: getting author ID for token ${token}`);
  const authorId = await authorManager.getAuthor4Token(token);
  logger.debug(`handleMessage: Setting name for ${authorId} to ${displayname}`);
  authorManager.setAuthorName(authorId, displayname);
};

exports.loadSettings = (hookName, {settings: _settings}, cb) => {
  settings = _settings;
  settings.ep_headerauth = settings.ep_headerauth || settings.headerauth || {};
  if (settings.headerauth != null) {
    logger.warn('The headerauth setting is deprecated; use ep_headerauth instead');
    logger.warn('Edit your settings.json and rename headerauth to ep_headerauth');
    delete settings.headerauth;
  }
  const hs = settings.ep_headerauth;
  if (hs.username_header == null) hs.username_header = 'x-authenticated-user';
  if (hs.displayname_header == null) hs.displayname_header = 'x-authenticated-name';
  return cb();
};
