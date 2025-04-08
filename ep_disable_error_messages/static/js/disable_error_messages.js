'use strict';

exports.postAceInit = (hookName, args, cb) => {
  $('body').append(
      `<style type="text/css">
        #gritter-container > .error {
          display:none !important;
        }
        </style>
        `);
};
