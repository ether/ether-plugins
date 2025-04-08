'use strict';

/**
 *
 * This hook inserts a bunch of Javascripts and CSS links into the editor iframe.
 * They are used for styling of and making the image icons displayed in the main pad text clickable.
 */
exports.aceInitInnerdocbodyHead = (hookName, args, cb) => {
  const url = '../static/plugins/ep_disable_drag_and_drop/static/js/ace_inner.js"></script>';
  args.iframeHTML.push(`<script type="text/javascript" src="${url}"`);
  cb();
};
