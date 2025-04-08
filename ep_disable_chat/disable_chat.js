'use strict';

exports.eejsBlock_styles = (hookName, context, cb) => {
  context.content += `<style>
    .hide-for-mobile { display:none !important; }
    #chaticon, #chatbox { display: none !important; }
    #users { height:100%; }
    .popup#users.chatAndUsers > .popup-content { height:100%; }
    .popup#users.chatAndUsers { height:100%; }
  </style>`;
  cb();
};
