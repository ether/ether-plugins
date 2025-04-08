'use strict';

exports.documentReady = () => {
  if ($('#readonlyinput').is(':checked')) {
    // If this is a pro pad IE contains a $ in teh URL
    if (window.location.href.indexOf('$') !== -1) {
      const basePath = `${window.location.protocol}//${window.location.hostname}`;
      const readonlyLink = `${basePath}/${clientVars.readOnlyId}`; // format the whole URL

      // Now write the values to the UI
      $('#embedinput')
          .val(`<iframe name='embed_readonly' src='${readonlyLink}' width=600 height=400>`);
      $('#linkinput').val(readonlyLink);
    }
  } else {
    // If this is a pro pad IE contains a $ in teh URL
    let padPath;
    let padUrl;
    if (window.location.href.indexOf('$') !== -1) {
      padPath = window.location.href.split('$')[1]; // Get the whole Path
      padPath = padPath.split('?')[0]; // get the path without the params
      padUrl = `${window.location.protocol}//${window.location.hostname}/${padPath}`;
    }

    if (window.location.href.indexOf('r.') !== -1) { // If this is a read only PAD
      padPath = window.location.href.split('r.')[1];
      padPath = `r.${padPath}`;
      padUrl = `${window.location.protocol}//${window.location.hostname}/${padPath}`;
    }

    // Now write the values to the UI
    $('#embedinput').val(`<iframe name='embed_readwrite' src='${padUrl}' width=600 height=400>`);
    $('#linkinput').val(padUrl);
  }
};
