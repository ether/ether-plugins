'use strict';

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content +=
      "<script src='../static/plugins/ep_text_statistics/static/js/textStats.js'></script>";
  return cb();
};
