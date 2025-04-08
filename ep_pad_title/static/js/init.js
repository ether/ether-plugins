'use strict';

exports.aceInitialized = (hook, context) => {
  const padTitle = clientVars.padTitle;
  if (padTitle) {
    window.document.title = padTitle;
  }
};
