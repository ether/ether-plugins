'use strict';

let logger = {};
for (const level of ['debug', 'info', 'warn', 'error']) {
  logger[level] = console[level].bind(console, 'ep_stable_authorid:');
}
let exclude = null;

exports.getAuthorId = async (hookName, ctx) => {
  if (exclude == null) return;
  const {username} = ctx.user || {};
  // If the user has not authenticated, or has "authenticated" as a guest user, do the default
  // behavior (try another getAuthorId hook function if any, falling through to using the token as
  // the database key).
  if (!username || exclude.includes(username)) return;
  // The user is authenticated and has a username. Give the user a stable author ID so that they
  // appear to be the same author even after clearing cookies or accessing the pad from another
  // device. Note that this string is guaranteed to never have the form of a valid token; without
  // that guarantee an unauthenticated user might be able to impersonate an authenticated user.
  ctx.dbKey = `username=${username}`;
  // Return a falsy but non-undefined value to stop Etherpad from calling any more getAuthorId hook
  // functions and look up the author ID using the username-derived database key set above.
  return '';
};

exports.init_ep_stable_authorid = async (hookName, {logger: l}) => {
  if (l != null) logger = l;
};

exports.loadSettings = async (hookName, {settings}) => {
  exclude = null;
  if (!settings.requireAuthentication) {
    logger.warn('disabled because requireAuthentication is false');
    return;
  }
  const s = settings.ep_stable_authorid || {};
  // admin is included in the default exclude list because Etherpad only allows a single connection
  // per author ID at a time, and ideally admins aren't kicked out. Also, admin is a role account,
  // not a specific person, so multiple people could be using the admin account.
  if (s.exclude == null) s.exclude = ['admin', 'guest'];
  if (!Array.isArray(s.exclude)) {
    throw new Error('settings.ep_stable_authorid.exclude is not an array');
  }
  exclude = s.exclude;
  logger.info('configured:', s);
};
