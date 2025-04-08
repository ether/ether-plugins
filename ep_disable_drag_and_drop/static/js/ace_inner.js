'use strict';

// This is a hack to get around ACEs brain-dead limit on onClick on
// links inside the ACE domlines...
// Borrowed from: https://github.com/redhog/ep_sketchspace/blob/master/static/js/ace_inner.js

$(document).bind('dragstart', (e) => {
  alert('Drag and Drop is Disabled');
  e.preventDefault();
  return false;
});

$(document).bind('dragover drop', (e) => {
  alert('Drag and Drop is Disabled');
  e.preventDefault();
  return false;
});
