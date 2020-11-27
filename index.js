/* global exports, require */

const eejs = require('ep_etherpad-lite/node/eejs');
const padManager = require('ep_etherpad-lite/node/db/PadManager');

exports.expressCreateServer = (hookName, {app}, cb) => {
  app.get('/list', async (req, res) => {
    const padIds = (await padManager.listAllPads()).padIDs;
    res.send(eejs.require('ep_padlist2/templates/pads.html', {padIds}));
  });
  return cb();
};

exports.eejsBlock_indexWrapper = (hookName, context, cb) => {
  context.content = `${context.content
  }<div style="text-align:center; margin-top:2em;">` +
      '<a href="list" data-l10n-id="ep_padlist2_index_all-pads">All Pads</a>' +
      '</div>';
  return cb();
};
