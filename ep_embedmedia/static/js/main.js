'use strict';

$(document).ready(() => {
  $('#insertEmbedMedia').click(() => {
    $('#embedMediaModal').toggleClass('popup-show');
  });

  $('#doEmbedMedia').click(() => {
    const padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;
    $('#embedMediaModal').toggleClass('popup-show');

    return padeditor.ace.callWithAce((ace) => {
      const rep = ace.ace_getRep();
      ace.ace_replaceRange(rep.selStart, rep.selEnd, 'E');
      ace.ace_performSelectionChange(
          [rep.selStart[0], rep.selStart[1] - 1], rep.selStart, false);
      ace.ace_performDocumentApplyAttributesToRange(
          rep.selStart, rep.selEnd,
          [['embedMedia', escape($('#embedMediaSrc')[0].value)]]);
    }, 'embedMedia');
  });

  $('#cancelEmbedMedia').click(() => {
    $('#embedMediaModal').toggleClass('popup-show');
  });
});
