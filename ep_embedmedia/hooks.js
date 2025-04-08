'use strict';

const eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_editbarMenuLeft = (hookName, args, cb) => {
  args.content += eejs.require('ep_embedmedia/templates/editbarButtons.ejs', {}, module);
  cb();
};

exports.eejsBlock_body = (hookName, args, cb) => {
  args.content += eejs.require('ep_embedmedia/templates/modals.ejs', {}, module);
  cb();
};

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content += eejs.require('ep_embedmedia/templates/scripts.ejs', {}, module);
  cb();
};

exports.eejsBlock_styles = (hookName, args, cb) => {
  args.content += eejs.require('ep_embedmedia/templates/styles.ejs', {}, module);
  cb();
};
