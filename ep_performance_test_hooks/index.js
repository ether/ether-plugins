'use strict';

const stats = require('ep_etherpad-lite/node/stats');
let performance = {};
stats.gauge('ep_performance_test_hooks', () => performance);

/*
* Handle incoming stats
*/
exports.handleMessage = async (hookName, context) => {
  // Firstly ignore any request that aren't about chat
  let isStats = false;
  if (context &&
      context.message &&
      context.message.type &&
      context.message.data &&
      context.message.data.type === 'STATS') {
    isStats = true;
  }

  if (!isStats) {
    return false;
  } else {
    performance = JSON.parse(context.message.data.message);
    return null;
  }
};
