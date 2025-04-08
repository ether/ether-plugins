'use strict';

const stats = require('ep_etherpad-lite/node/stats');

exports.expressCreateServer = (hookName, args, cb) => {
  args.app.get('/metrics', (req, res) => {
    let response = '';
    const flattened = flatten(stats.toJSON());
    for (const [dirtyKey, value] of Object.entries(flattened)) {
      if (!isNaN(value)) {
        const key = dirtyKey.replace(/[^a-zA-Z0-9_]/g, '_');
        response += `# HELP ${key} Some Etherpad related data\n`;
        response += `# TYPE ${key} gauge\n`;
        response += `${key} ${value}\n\n`;
      }
    }
    res.setHeader('content-type', 'text/plain');
    res.send(response);
  });
  cb();
};

const flatten = (obj, parent, res = {}) => {
  for (const [key, value] of Object.entries(obj)) {
    const propName = parent ? `${parent}_${key}` : key;
    if (value != null && typeof value === 'object') {
      flatten(value, propName, res);
    } else {
      res[propName] = value;
    }
  }
  return res;
};
