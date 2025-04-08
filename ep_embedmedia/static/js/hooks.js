'use strict';

exports.aceInitInnerdocbodyHead = (hookName, args, cb) => {
  const url = '../static/plugins/ep_embedmedia/static/css/ace.css';
  args.iframeHTML.push(`<link rel="stylesheet" type="text/css" href="${url}"/>`);
  cb();
};

exports.aceAttribsToClasses = (hookName, args) => {
  if (args.key === 'embedMedia' && args.value !== '') {
    return [`embedMedia:${args.value}`];
  }
};

exports.aceCreateDomLine = (hookName, args, cb) => {
  if (args.cls.indexOf('embedMedia:') >= 0) {
    const clss = [];
    const argClss = args.cls.split(' ');
    let value;

    for (let i = 0; i < argClss.length; i++) {
      const cls = argClss[i];
      if (cls.indexOf('embedMedia:') !== -1) {
        value = cls.substr(cls.indexOf(':') + 1);
      } else {
        clss.push(cls);
      }
    }
    const cleanedCode = exports.cleanEmbedCode(unescape(value));
    const media = `<span class='media'>${cleanedCode}</span>`;
    return cb([{
      cls: clss.join(' '),
      extraOpenTags: `<span class='embedMedia'>${media}<span class='character'>`,
      extraCloseTags: '</span>',
    }]);
  }

  return cb();
};


const parseUrlParams = (url) => {
  const res = {};
  url.split('?')[1].split('&').map((item) => {
    item = item.split('=');
    res[item[0]] = item[1];
  });
  return res;
};

exports.sanitize = (inputHtml) => {
  // Monkeypatch the sanitizer a bit
  // adding support for embed tags and fixing broken param tags
  /* global html4, html */
  html4.ELEMENTS.embed = html4.eflags.UNSAFE;
  html4.ELEMENTS.param = html4.eflags.UNSAFE;
  // NOT empty or we break stuff in some browsers...

  return html.sanitizeWithPolicy(inputHtml, (tagName, attribs) => {
    if ($.inArray(tagName, ['embed', 'object', 'iframe', 'param']) === -1) {
      return null;
    }
    return attribs;
  });
};

exports.cleanEmbedCode = (orig) => {
  let res = null;

  const value = $.trim(orig);

  if (value.indexOf('http://') === 0 || value.indexOf('https://') === 0) {
    if (value.indexOf('www.youtube.com') !== -1) {
      const video = escape(parseUrlParams(value).v);
      // eslint-disable-next-line max-len
      res = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${video}" frameborder="0" allowfullscreen></iframe>`;
    } else if (value.indexOf('vimeo.com') !== -1) {
      const video = escape(value.split('/').pop());
      // eslint-disable-next-line max-len
      res = `<iframe src="http://player.vimeo.com/video/${video}?color=ffffff" width="420" height="236" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
    } else {
      console.warn(`Unsupported embed url: ${orig}`);
    }
  } else if (value.indexOf('<') === 0) {
    const sanitizedValue = $.trim(exports.sanitize(value));
    if (sanitizedValue !== '') {
      console.log([orig, sanitizedValue]);
      res = sanitizedValue;
    } else {
      console.warn(`Invalid embed code: ${orig}`);
    }
  } else {
    console.warn(`Invalid embed code: ${orig}`);
  }

  if (!res) {
    return "<img src='../static/plugins/ep_embedmedia/static/html/invalid.png'>";
  }

  return res;
};
