'use strict';

const assert = require('assert').strict;
const log4js = require('ep_etherpad-lite/node_modules/log4js');

const logger = log4js.getLogger('ep_disable_imports');
let allow = new Set();
let deny = new Set();

class PolyfillImportError extends Error {
  constructor(ignored, ...args) {
    super(...args);
    if (Error.captureStackTrace) Error.captureStackTrace(this, PolyfillImportError);
  }
}

exports.import = async (hookName, {fileEnding, ImportError = PolyfillImportError}) => {
  if (deny.has(fileEnding) || (allow != null && !allow.has(fileEnding))) {
    logger.error(`denying import of file with extension ${JSON.stringify(fileEnding)}`);
    throw new ImportError('permission', `forbidden file extension: ${JSON.stringify(fileEnding)}`);
  }
};

exports.loadSettings = async (hookName, {settings: {ep_disable_imports: settings}}) => {
  if (settings == null) settings = {};
  assert.equal(typeof settings, 'object');
  if (settings.allow == null && settings.deny == null) settings.allow = [];
  if (settings.deny == null) settings.deny = [];
  assert(settings.allow == null || Array.isArray(settings.allow));
  assert(Array.isArray(settings.deny));
  const fixExtension = (ext) => {
    if (!ext.startsWith('.')) ext = `.${ext}`;
    return ext.toLowerCase();
  };
  deny = new Set(settings.deny.map(fixExtension));
  allow = settings.allow == null
    ? null : new Set(settings.allow.map(fixExtension).filter((x) => !deny.has(x)));
  const displayExts = (exts) => [...exts].sort().map(JSON.stringify).join(', ');
  const humanReadable =
      allow == null ? `all${deny.size === 0 ? '' : ` except ${displayExts(deny)}`}`
      : allow.size === 0 ? 'none'
      : displayExts(allow);
  logger.info(`allowed extensions: ${humanReadable}`);
};
