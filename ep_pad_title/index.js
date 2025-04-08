'use strict';

const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.clientVars = (hook, context, callback) => {
  let padTitle;
  try {
    if (settings.ep_pad_title) {
      padTitle = settings.ep_pad_title;
    }
  } catch (e) {
    console.warn('ep_pad_title: a default title can be set in settings.json');
    padTitle = '';
  }
  return callback({padTitle});
};
