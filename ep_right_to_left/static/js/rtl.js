'use strict';

exports.postAceInit = (hookName, args, cb) => {
  $('#chattext').addClass('rtl');
  $('.popup').addClass('rtl');
  $('input').addClass('rtl');
  pad.changeViewOption('rtlIsTrue', true);
};
