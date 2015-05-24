var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.postAceInit = function (hook_name, args, cb) {
    $("li[data-key='clearauthorship']").hide();
}
