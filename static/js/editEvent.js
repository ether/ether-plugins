exports.aceEditEvent = function (name, call, cb) {
  if (!call) return;
  if (!call.callstack.docTextChanged) return false;
  const lines = $('iframe[name="ace_outer"]').contents().find('iframe').contents().find('#innerdocbody').children('div');
  // I think the problem is that some lines aren't populated yet are computed..
  // Yep that's the problem..
  let linesLength = 0;
  let total = 0;
  $.each(lines, (k, line) => {
    const text = $(line).text();
    if (!text) return;
    const stats = textstatistics(text);
    clientVars.plugins.plugins.ep_text_statistics.stats = stats;
    const readingEase = stats.fleschKincaidReadingEase();
    total += readingEase; // add the ease to the total
    linesLength++;
  });
  const average = total / linesLength; // Average reading ease of entire pad
  if (average <= 50 && average !== 0) { // Random value, needs tweaking to something bareable
    $('#text_statistics').html('&#9785;'); // sad face!
  } else {
    $('#text_statistics').html('&#9786;'); // happy face..
  }
};

$(document).ready(() => {
  $('#text_statistics').parent().click(() => {
    const stats = clientVars.plugins.plugins.ep_text_statistics.stats;
    console.log(stats);
    let gradeLevel = stats.fleschKincaidGradeLevel();
    let readingEase = stats.fleschKincaidReadingEase();
    if (gradeLevel < 0) gradeLevel = 0;
    if (readingEase < 0) readingEase = 0;
    const statString = `The current Grade Level for this pad is ${Math.round(gradeLevel)}.  The current Reading Ease for this pad is ${Math.round(readingEase)}`;

    $.gritter.add({
      // (string | mandatory) the heading of the notification
      title: 'Text Statistics',
      // (string | mandatory) the text inside the notification
      text: statString,
      // (bool | optional) if you want it to fade out on its own or just sit there
      sticky: false,
      // (int | optional) the time you want it to be alive for before fading out
      time: '4000',
    });
  });
});
