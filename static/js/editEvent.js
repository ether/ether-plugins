exports.aceEditEvent = function(name, call, cb){
  if(!call) return;
  if(!call.callstack.docTextChanged) return false;
  var lines = $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").children("div");
  var total = 0;
  $.each(lines, function(k, line){ 
    var text = $(line).text();
    if(!text) return;
    var stats = textstatistics(text);
    var readingEase = stats.fleschKincaidReadingEase();
    total = total + readingEase; // add the ease to the total
  });
  var average = total / lines.length; // Average reading ease of entire pad
  if(average <= 50){ // Random value, needs tweaking to something bareable
    $('#text_statistics').text("Bad");
  }else{
    $('#text_statistics').text("Good");
  }
}

