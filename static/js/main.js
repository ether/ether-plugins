/**
 *
 * This hook inserts a bunch of Javascripts and CSS links into the editor iframe. They are used for styling of and making the image icons displayed in the main pad text clickable.
 */
exports.aceInitInnerdocbodyHead = function (hook_name, args, cb) {
  args.iframeHTML.push('<script type="text/javascript" src="../static/plugins/ep_disable_drag_and_drop/static/js/ace_inner.js"></script>');
  return cb();
};
