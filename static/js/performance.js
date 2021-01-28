'use strict';

exports.postAceInit = () => {
  const perf = {};
  perf.performance = performance;
  perf.loadTimes = getLoadTimes();
  perf.sizes = getSizeData();
  const myAuthorId = pad.getUserId();
  const padId = pad.getPadId();
  const message = {
    type: 'STATS',
    action: 'sendSTATS',
    message: JSON.stringify(perf),
    padId,
    myAuthorId,
  };
  pad.collabClient.sendMessage(message); // Send the chat position message to the server
};


const getLoadTimes = () => {
  const resources = performance.getEntriesByType('resource');
  const data = {};

  for (let i = 0; i < resources.length; i++) {
    data[resources[i].name] = {};
    // Redirect time
    let t = resources[i].redirectEnd - resources[i].redirectStart;
    data[resources[i].name].redirectTime = t;

    // DNS time
    t = resources[i].domainLookupEnd - resources[i].domainLookupStart;
    data[resources[i].name].domainLookupTime = t;

    // TCP handshake time
    t = resources[i].connectEnd - resources[i].connectStart;
    data[resources[i].name].tcpTime = t;

    // Secure connection time
    t = (resources[i].secureConnectionStart > 0) ? (
      resources[i].connectEnd - resources[i].secureConnectionStart
    ) : '0';
    data[resources[i].name].secureConnectionTime = t;

    // Response time
    t = resources[i].responseEnd - resources[i].responseStart;
    data[resources[i].name].responseTime = t;

    // Fetch until response end
    t = (resources[i].fetchStart > 0)
      ? (resources[i].responseEnd - resources[i].fetchStart) : '0';
    data[resources[i].name].fetchUntilResponseEndTime = t;

    // Request start until response end
    t = (resources[i].requestStart > 0)
      ? (resources[i].responseEnd - resources[i].requestStart) : '0';
    data[resources[i].name].requestStartUntilResponseEndTime = t;

    // Start until response end
    t = (resources[i].startTime > 0) ? (resources[i].responseEnd - resources[i].startTime) : '0';
    data[resources[i].name].startUntilResponseEndTime = t;
  }
  return data;
};

const getSizeData = () => {
  const list = performance.getEntriesByType('resource');
  if (list === undefined) {
    return;
  }
  const data = {};

  // For each "resource", display its *Size property values
  for (let i = 0; i < list.length; i++) {
    data[list[i].name] = {};

    if ('decodedBodySize' in list[i]) {
      data[list[i].name].decodedBodySize = list[i].decodedBodySize;
    }

    if ('encodedBodySize' in list[i]) {
      data[list[i].name].encodedBodySize = list[i].encodedBodySize;
    }

    if ('transferSize' in list[i]) {
      data[list[i].name].transferSize = list[i].transferSize;
    }
  }
};
