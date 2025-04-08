'use strict';

const eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_editbarMenuLeft = (hookName, args, cb) => {
  args.content += eejs.require('ep_special_characters/templates/editbarButtons.ejs', {}, module);
  cb();
};

exports.eejsBlock_body = (hookName, args, cb) => {
  args.content += eejs.require('ep_special_characters/templates/modals.ejs', {}, module);
  cb();
};

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content += eejs.require('ep_special_characters/templates/scripts.ejs', {}, module);
  cb();
};

exports.eejsBlock_styles = (hookName, args, cb) => {
  args.content += eejs.require('ep_special_characters/templates/styles.ejs', {}, module);
  cb();
};

exports.eejsBlock_dd_insert = (hookName, args, cb) => {
  args.content += eejs.require('ep_special_characters/templates/special_characters_menu.ejs');
  cb();
};
