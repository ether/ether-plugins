'use strict';

describe('embed media', function () {
  beforeEach(function (cb) {
    // Make sure webrtc is disabled, and reload with the firefox fake webrtc pref
    // (Chrome needs a CLI parameter to have fake webrtc)
    helper.newPad(cb);
    this.timeout(60000);
  });

  it('inserts media into pad', async function () {
    const chrome$ = helper.padChrome$;
    const inner$ = helper.padInner$;
    chrome$('.buttonicon-embed-media').click();
    chrome$('#embedMediaSrc').val(`
        <iframe width="560" height="315"
        src="https://www.youtube.com/embed/AqTMAkNc6nA"
        frameborder="0"
        allowfullscreen></iframe>`);
    chrome$('#doEmbedMedia').click();
    // check content is in pad
    await helper.waitForPromise(() => inner$('.media').length !== 0);
    // check content is not listed as invalid
    await helper.waitForPromise(() => inner$('img').length === 0);
    // check the embed content is visible
    await helper.waitForPromise(() => inner$('iframe').length !== 0);
  });
});
