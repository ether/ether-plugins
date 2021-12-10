'use strict';

const assert = require('assert').strict;
const common = require('ep_etherpad-lite/tests/backend/common');
const epDisableImports = require('../../../../index');

describe(__filename, function () {
  let agent;
  let padId;

  const makeId = (len = 10) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const charset = `${alphabet}${alphabet.toUpperCase()}0123456789`;
    let ret = '';
    while (ret.length < len) {
      ret += charset[Math.floor(Math.random() * charset.length)];
    }
  };

  const samples = {
    html: {
      content: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>example</title>
          </head>
          <body>
            hello world
          </body>
        </html>
      `,
      contentType: 'text/html',
    },
    txt: {
      content: 'hello world\n',
      contentType: 'text/plain',
    },
  };

  const loadSettings =
      async (settings) => await epDisableImports.loadSettings('loadSettings', {settings});

  const doImport = (ext, contentType = samples[ext].contentType) => agent.post(`/p/${padId}/import`)
      .attach('file', Buffer.from(samples[ext].content), {filename: `/test.${ext}`, contentType});

  const expectPermissionDenied = async (req) => await req
      .expect(400)
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.equal(res.body.code, 1);
        assert.equal(res.body.message, 'permission');
      });

  before(async function () {
    agent = await common.init();
  });

  beforeEach(async function () {
    padId = makeId();
  });

  afterEach(async function () {
    await loadSettings({});
  });

  describe('denies all by default', function () {
    const unset = {toString: () => '(unset)'};
    for (const tc of [unset, null, undefined, {toString: () => '{}'}]) {
      it(String(tc), async function () {
        const settings = {};
        if (tc !== unset) settings.ep_disable_imports = tc;
        await loadSettings(settings);
        await expectPermissionDenied(doImport('html'));
        await expectPermissionDenied(doImport('txt'));
      });
    }
  });

  it('allow none', async function () {
    await loadSettings({ep_disable_imports: {allow: []}});
    await expectPermissionDenied(doImport('html'));
    await expectPermissionDenied(doImport('txt'));
  });

  it('allow some', async function () {
    await loadSettings({ep_disable_imports: {allow: ['txt']}});
    await expectPermissionDenied(doImport('html'));
    await doImport('txt').expect(200);
  });

  it('deny none', async function () {
    await loadSettings({ep_disable_imports: {deny: []}});
    await doImport('html').expect(200);
    await doImport('txt').expect(200);
  });

  it('deny some', async function () {
    await loadSettings({ep_disable_imports: {deny: ['html']}});
    await expectPermissionDenied(doImport('html'));
    await doImport('txt').expect(200);
  });

  it('deny trumps allow', async function () {
    await loadSettings({ep_disable_imports: {allow: ['html'], deny: ['html']}});
    await expectPermissionDenied(doImport('html'));
  });

  describe('case insensitive', function () {
    it('allow', async function () {
      await loadSettings({ep_disable_imports: {allow: ['HTML']}});
      await doImport('html').expect(200);
    });

    it('deny', async function () {
      await loadSettings({ep_disable_imports: {deny: ['HTML']}});
      await expectPermissionDenied(doImport('html'));
    });
  });

  describe('leading period is ignored', function () {
    it('allow', async function () {
      await loadSettings({ep_disable_imports: {allow: ['.html']}});
      await doImport('html').expect(200);
    });

    it('deny', async function () {
      await loadSettings({ep_disable_imports: {deny: ['.html']}});
      await expectPermissionDenied(doImport('html'));
    });
  });

  describe('content type does not matter', function () {
    it('allow', async function () {
      await loadSettings({ep_disable_imports: {allow: ['txt']}});
      await expectPermissionDenied(doImport('html', samples.txt.contentType));
      await doImport('txt', samples.html.contentType).expect(200);
    });

    it('deny', async function () {
      await loadSettings({ep_disable_imports: {deny: ['html']}});
      await expectPermissionDenied(doImport('html', samples.txt.contentType));
      await doImport('txt', samples.html.contentType).expect(200);
    });
  });
});
