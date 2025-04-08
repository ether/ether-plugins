'use strict';

exports.aceInitInnerdocbodyHead = (hookName, args, cb) => {
  const path = '../static/plugins/ep_special_characters/static/css/ace.css';
  args.iframeHTML.push(
      `<link rel="stylesheet" type="text/css" href="${path}"/>`);
  cb();
};

exports.aceAttribsToClasses = (hookName, args, cb) => {
  if (args.key === 'specialCharacters' && args.value !== '') {
    return cb([`specialCharacters:${args.value}`]);
  }
};

exports.aceCreateDomLine = (hookName, args, cb) => {
  if (args.cls.indexOf('specialCharacters:') >= 0) {
    const clss = [];
    const argClss = args.cls.split(' ');
    let value;

    for (let i = 0; i < argClss.length; i++) {
      const cls = argClss[i];
      if (cls.indexOf('specialCharacters:') !== -1) {
        value = cls.substr(cls.indexOf(':') + 1);
      } else {
        clss.push(cls);
      }
    }

    return cb([{
      cls: clss.join(' '),
      extraOpenTags: `<span class='specialCharacters'>
        <span class='media'>${exports.cleanEmbedCode(unescape(value))}</span>
        <span class='character'>`,
      extraCloseTags: '</span>',
    }]);
  }

  return cb();
};
