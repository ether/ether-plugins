var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.postAceInit = function (hook_name, args, cb) {
  // get clearauthorship item
  const item = $('li[data-key="clearauthorship"]');
  // check if the item is sorrounded by separators, then hide the previous one
  if (item.prev('.separator').length == 1 &&
		item.next('.separator').length == 1) {
	  item.prev('.separator').remove();
  }
  // hide the item
  item.remove();
};
