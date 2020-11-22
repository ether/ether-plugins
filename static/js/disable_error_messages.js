var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.suppress = function (hook_name, args, cb) {
  setTimeout(() => {
    $('#editorloadingbox').hide('Error messages suppressed by your system administrator');
    $('#editorcontainerbox').append("<div id='suppresserror' style='text-align:center;margin-top:50px;'><h1>Error messages suppressed by your system administrator</h1></div>");
  }, 1000);
};
exports.postAceInit = function (hook_name, args, cb) {
  $('#suppresserror').hide();
};
