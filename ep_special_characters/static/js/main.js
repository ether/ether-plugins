'use strict';

$(document).ready(() => {
  const module = $('#specialCharactersModal');
  $('.insertSpecialCharacter').click(() => {
    module.toggleClass('popup-show');
  });

  $('#cancelspecialCharacter').click(() => {
    module.toggleClass('popup-show');
  });
  $('#specialCharactersModal').on('click', '.specialChar', function () {
    const char = ($(this).text());
    $('.usedSpecialCharacters').append(this);
    $('.usedSpecialCharactersLabel').show();
    const padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;
    module.toggleClass('popup-show');
    return padeditor.ace.callWithAce((ace) => {
      const rep = ace.ace_getRep();
      ace.ace_replaceRange(rep.selStart, rep.selEnd, char);
      ace.ace_focus();
    }, 'specialCharacters');
  });

  let i = 0;
  while (i <= 5000) {
    $('.specialChars').append(`<li class='specialChar'>&#${i}</li>`);
    i++;
  }
});
