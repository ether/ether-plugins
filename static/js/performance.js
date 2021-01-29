'use strict';
const perf = {};
perf.etherpadHooks = {};

exports.documentReady = () => perf.etherpadHooks.documentReady = Date.now();
exports.aceAttribClasses = () => perf.etherpadHooks.aceAttribClasses = Date.now();
exports.aceEditorCSS = () => perf.etherpadHooks.aceEditorCSS = Date.now();
exports.aceInitInnerdocbodyHead = () => perf.etherpadHooks.aceInitInnerdocbodyHead = Date.now();
exports.aceInitialized = () => perf.etherpadHooks.aceInitialized = Date.now();
exports.postToolbarInit = () => perf.etherpadHooks.postToolbarInit = Date.now();
exports.postTimesliderInit = () => perf.etherpadHooks.postTimesliderInit = Date.now();

exports.postAceInit = () => {
  perf.etherpadHooks.postAceInit = Date.now();
  perf.performance = performance;
  perf.loadTimes = getLoadTimes();
  perf.loadSizes = getSizeData();
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
    const name = new URL(resources[i].name).pathname;

    data[name] = {};

    // Redirect time
    let t = resources[i].redirectEnd - resources[i].redirectStart;
    data[name].redirectTime = t;

    // DNS time
    t = resources[i].domainLookupEnd - resources[i].domainLookupStart;
    data[name].domainLookupTime = t;

    // TCP handshake time
    t = resources[i].connectEnd - resources[i].connectStart;
    data[name].tcpTime = t;

    // Secure connection time
    t = (resources[i].secureConnectionStart > 0) ? (
      resources[i].connectEnd - resources[i].secureConnectionStart
    ) : '0';
    data[name].secureConnectionTime = t;

    // Response time
    t = resources[i].responseEnd - resources[i].responseStart;
    data[name].responseTime = t;

    // Fetch until response end
    t = (resources[i].fetchStart > 0)
      ? (resources[i].responseEnd - resources[i].fetchStart) : '0';
    data[name].fetchUntilResponseEndTime = t;

    // Request start until response end
    t = (resources[i].requestStart > 0)
      ? (resources[i].responseEnd - resources[i].requestStart) : '0';
    data[name].requestStartUntilResponseEndTime = t;

    // Start until response end
    t = (resources[i].startTime > 0) ? (resources[i].responseEnd - resources[i].startTime) : '0';
    data[name].startUntilResponseEndTime = t;
  }
  return data;
};

const getSizeData = () => {
  const list = performance.getEntriesByType('resource');
  if (list === undefined) {
    return;
  }
  const data = {};

  // For each "resource", display its Size property values
  for (let i = 0; i < list.length; i++) {
    const url = new URL(list[i].name).pathname;
    data[url] = {};

    if ('decodedBodySize' in list[i]) {
      data[url].decodedBodySize = list[i].decodedBodySize;
    }

    if ('encodedBodySize' in list[i]) {
      data[url].encodedBodySize = list[i].encodedBodySize;
    }

    if ('transferSize' in list[i]) {
      data[url].transferSize = list[i].transferSize;
    }
  }
  return data;
};
