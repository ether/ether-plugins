'use strict';

// All timing data is for non-minified verison of Etherpad!
// TODO: Add minified data too :)

const requirements = {
  etherpadHooks: {
    aceInitInnerdocbodyHead: 157,
    aceInitialized: 2693,
    documentReady: 10,
    postAceInit: 2789,
    postToolbarInit: 2728,
  },
  startDurations: {
    npmLoad: 240,
    dbInit: 5000,
    loadPlugins: 10000,
    loadSettings: 5,
    createSettings: 20000,
  },
  perf: {
    duration: 685.1800000004005,
    fetchStart: 0.5650000020978041,
    domainLookupStart: 0.5650000020978041,
    domainLookupEnd: 0.5650000020978041,
    connectStart: 0.5650000020978041,
    connectEnd: 0.5650000020978041,
    requestStart: 11.395000001357403,
    responseStart: 67.62499999967986,
    responseEnd: 72.0949999995355,
    transferSize: 35141,
    encodedBodySize: 34843,
    decodedBodySize: 34843,
    unloadEventStart: 74.85499999893364,
    unloadEventEnd: 74.85499999893364,
    domInteractive: 605.5999999989581,
    domContentLoadedEventStart: 605.6549999993877,
    domContentLoadedEventEnd: 607.4699999990116,
    domComplete: 685.1300000016636,
    loadEventStart: 685.1700000006531,
    loadEventEnd: 685.1800000004005,
  },
  loadSizes: {
    '/static/css/pad.css': {
      decodedBodySize: 1259,
      encodedBodySize: 1259,
      transferSize: 1641,
    },
    '/static/skins/colibris/pad.css': {
      decodedBodySize: 2145,
      encodedBodySize: 2145,
      transferSize: 2527,
    },
    '/static/js/html10n.js': {
      decodedBodySize: 26913,
      encodedBodySize: 26913,
      transferSize: 27310,
    },
    '/static/js/l10n.js': {
      decodedBodySize: 461,
      encodedBodySize: 461,
      transferSize: 857,
    },
    '/static/js/require-kernel.js': {
      decodedBodySize: 19418,
      encodedBodySize: 19418,
      transferSize: 19815,
    },
    '/javascripts/lib/ep_etherpad-lite/static/js/pad_utils.js': {
      decodedBodySize: 209603,
      encodedBodySize: 50931,
      transferSize: 51721,
    },
    '/socket.io/socket.io.js': {
      decodedBodySize: 62783,
      encodedBodySize: 62783,
      transferSize: 63014,
    },
    '/javascripts/lib/ep_etherpad-lite/static/js/pad.js': {
      decodedBodySize: 221371,
      encodedBodySize: 57626,
      transferSize: 58088,
    },
    '/javascripts/lib/ep_etherpad-lite/static/js/ace2_common.js': {
      decodedBodySize: 378028,
      encodedBodySize: 107895,
      transferSize: 108358,
    },
    '/static/skins/colibris/pad.js': {
      decodedBodySize: 224,
      encodedBodySize: 224,
      transferSize: 619,
    },
    '/static/css/pad/normalize.css': {
      decodedBodySize: 7737,
      encodedBodySize: 7737,
      transferSize: 8120,
    },
    '/static/css/pad/layout.css': {
      decodedBodySize: 1275,
      encodedBodySize: 1275,
      transferSize: 1657,
    },
    '/static/css/pad/fonts.css': {
      decodedBodySize: 2466,
      encodedBodySize: 2466,
      transferSize: 2848,
    },
    '/static/css/pad/toolbar.css': {
      decodedBodySize: 3652,
      encodedBodySize: 3652,
      transferSize: 4034,
    },
    '/static/css/pad/popup.css': {
      decodedBodySize: 1622,
      encodedBodySize: 1622,
      transferSize: 2004,
    },
    '/static/css/pad/popup_connectivity.css': {
      decodedBodySize: 571,
      encodedBodySize: 571,
      transferSize: 953,
    },
    '/static/css/pad/popup_import_export.css': {
      decodedBodySize: 367,
      encodedBodySize: 367,
      transferSize: 749,
    },
    '/static/css/pad/popup_users.css': {
      decodedBodySize: 2498,
      encodedBodySize: 2498,
      transferSize: 2880,
    },
    '/static/css/pad/icons.css': {
      decodedBodySize: 7140,
      encodedBodySize: 7140,
      transferSize: 7523,
    },
    '/static/css/pad/chat.css': {
      decodedBodySize: 2956,
      encodedBodySize: 2956,
      transferSize: 3338,
    },
    '/static/css/pad/gritter.css': {
      decodedBodySize: 843,
      encodedBodySize: 843,
      transferSize: 1225,
    },
    '/static/css/pad/loadingbox.css': {
      decodedBodySize: 324,
      encodedBodySize: 324,
      transferSize: 706,
    },
    '/static/css/pad/form.css': {
      decodedBodySize: 4003,
      encodedBodySize: 4003,
      transferSize: 4385,
    },
    '/static/skins/colibris/src/general.css': {
      decodedBodySize: 231,
      encodedBodySize: 231,
      transferSize: 612,
    },
    '/static/skins/colibris/src/layout.css': {
      decodedBodySize: 1200,
      encodedBodySize: 1200,
      transferSize: 1582,
    },
    '/static/skins/colibris/src/pad-editor.css': {
      decodedBodySize: 91,
      encodedBodySize: 91,
      transferSize: 472,
    },
    '/static/skins/colibris/src/components/scrollbars.css': {
      decodedBodySize: 899,
      encodedBodySize: 899,
      transferSize: 1281,
    },
    '/static/skins/colibris/src/components/buttons.css': {
      decodedBodySize: 528,
      encodedBodySize: 528,
      transferSize: 910,
    },
    '/static/skins/colibris/src/components/popup.css': {
      decodedBodySize: 1603,
      encodedBodySize: 1603,
      transferSize: 1985,
    },
    '/static/skins/colibris/src/components/chat.css': {
      decodedBodySize: 1693,
      encodedBodySize: 1693,
      transferSize: 2075,
    },
    '/static/skins/colibris/src/components/sidediv.css': {
      decodedBodySize: 410,
      encodedBodySize: 410,
      transferSize: 792,
    },
    '/static/skins/colibris/src/components/gritter.css': {
      decodedBodySize: 2172,
      encodedBodySize: 2172,
      transferSize: 2554,
    },
    '/static/skins/colibris/src/components/table-of-content.css': {
      decodedBodySize: 358,
      encodedBodySize: 358,
      transferSize: 740,
    },
    '/static/skins/colibris/src/components/toolbar.css': {
      decodedBodySize: 2909,
      encodedBodySize: 2909,
      transferSize: 3291,
    },
    '/static/skins/colibris/src/components/users.css': {
      decodedBodySize: 941,
      encodedBodySize: 941,
      transferSize: 1323,
    },
    '/static/skins/colibris/src/components/form.css': {
      decodedBodySize: 2666,
      encodedBodySize: 2666,
      transferSize: 3048,
    },
    '/static/skins/colibris/src/components/import-export.css': {
      decodedBodySize: 317,
      encodedBodySize: 317,
      transferSize: 699,
    },
    '/static/skins/colibris/src/plugins/brightcolorpicker.css': {
      decodedBodySize: 389,
      encodedBodySize: 389,
      transferSize: 771,
    },
    '/static/skins/colibris/src/plugins/font_color.css': {
      decodedBodySize: 520,
      encodedBodySize: 520,
      transferSize: 902,
    },
    '/static/skins/colibris/src/plugins/tables2.css': {
      decodedBodySize: 4486,
      encodedBodySize: 4486,
      transferSize: 4869,
    },
    '/static/skins/colibris/src/plugins/set_title_on_pad.css': {
      decodedBodySize: 170,
      encodedBodySize: 170,
      transferSize: 551,
    },
    '/static/skins/colibris/src/plugins/author_hover.css': {
      decodedBodySize: 250,
      encodedBodySize: 250,
      transferSize: 631,
    },
    '/static/skins/colibris/src/plugins/comments.css': {
      decodedBodySize: 2521,
      encodedBodySize: 2521,
      transferSize: 2903,
    },
    '/static/skins/colibris/src/pad-variants.css': {
      decodedBodySize: 7748,
      encodedBodySize: 7748,
      transferSize: 8131,
    },
    '/static/font/Quicksand-Bold.ttf': {
      decodedBodySize: 77032,
      encodedBodySize: 77032,
      transferSize: 77401,
    },
    '/static/font/Quicksand-Medium.ttf': {
      decodedBodySize: 77460,
      encodedBodySize: 77460,
      transferSize: 77829,
    },
    '/static/font/fontawesome-etherpad.woff': {
      decodedBodySize: 15672,
      encodedBodySize: 15672,
      transferSize: 16041,
    },
    '/pluginfw/plugin-definitions.json': {
      decodedBodySize: 1500,
      encodedBodySize: 1500,
      transferSize: 1700,
    },
    '/locales.json': {
      decodedBodySize: 12111,
      encodedBodySize: 12111,
      transferSize: 12416,
    },
    '/javascripts/lib/ep_performance_test_hooks/static/js/performance.js': {
      decodedBodySize: 9999,
      encodedBodySize: 9999,
      transferSize: 9999,
    },
    '/socket.io/': {
      decodedBodySize: 14128,
      encodedBodySize: 3333,
      transferSize: 3555,
    },
  },
  loadTimes: {
    '/static/css/pad.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.8149999668821692,
      fetchUntilResponseEndTime: 32.11499995086342,
      requestStartUntilResponseEndTime: 28.025000006891787,
      startUntilResponseEndTime: 32.11499995086342,
    },
    '/static/skins/colibris/pad.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 2.0149999763816595,
      fetchUntilResponseEndTime: 32.11999998893589,
      requestStartUntilResponseEndTime: 27.69000001717359,
      startUntilResponseEndTime: 32.11999998893589,
    },
    '/static/js/html10n.js': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 26.489999960176647,
      fetchUntilResponseEndTime: 56.38500000350177,
      requestStartUntilResponseEndTime: 51.93999991752207,
      startUntilResponseEndTime: 56.38500000350177,
    },
    '/static/js/l10n.js': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 25.52500006277114,
      fetchUntilResponseEndTime: 73.86500004213303,
      requestStartUntilResponseEndTime: 72.15500005986542,
      startUntilResponseEndTime: 73.86500004213303,
    },
    '/static/js/require-kernel.js': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 6.754999980330467,
      fetchUntilResponseEndTime: 21.35000005364418,
      requestStartUntilResponseEndTime: 19.085000036284328,
      startUntilResponseEndTime: 21.35000005364418,
    },
    '/javascripts/lib/ep_etherpad-lite/static/js/pad_utils.js': {
      redirectTime: 17.67999993171543,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 8.450000081211329,
      fetchUntilResponseEndTime: 301.02000006008893,
      requestStartUntilResponseEndTime: 301.09000009018928,
      startUntilResponseEndTime: 301.96999999973923,
    },
    '/socket.io/socket.io.js': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 26.91500005312264,
      fetchUntilResponseEndTime: 71.02000003214926,
      requestStartUntilResponseEndTime: 54.955000057816505,
      startUntilResponseEndTime: 71.02000003214926,
    },
    '/javascripts/lib/ep_etherpad-lite/static/js/pad.js': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 66.80999998934567,
      fetchUntilResponseEndTime: 241.50000002700835,
      requestStartUntilResponseEndTime: 224.34500001836568,
      startUntilResponseEndTime: 241.50000002700835,
    },
    '/javascripts/lib/ep_etherpad-lite/static/js/ace2_common.js': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 33.9049999602139,
      fetchUntilResponseEndTime: 115.11000001337379,
      requestStartUntilResponseEndTime: 93.93500001169741,
      startUntilResponseEndTime: 115.11000001337379,
    },
    '/static/skins/colibris/pad.js': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.8050000071525574,
      fetchUntilResponseEndTime: 74.56500001717359,
      requestStartUntilResponseEndTime: 54.17499993927777,
      startUntilResponseEndTime: 74.56500001717359,
    },
    '/static/css/pad/normalize.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 2.2800000151619315,
      fetchUntilResponseEndTime: 86.5650000050664,
      requestStartUntilResponseEndTime: 41.05999995954335,
      startUntilResponseEndTime: 86.5650000050664,
    },
    '/static/css/pad/layout.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.660000067204237,
      fetchUntilResponseEndTime: 85.74000000953674,
      requestStartUntilResponseEndTime: 39.88000005483627,
      startUntilResponseEndTime: 85.74000000953674,
    },
    '/static/css/pad/fonts.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.9549999851733446,
      fetchUntilResponseEndTime: 85.86500003002584,
      requestStartUntilResponseEndTime: 34.605000051669776,
      startUntilResponseEndTime: 85.86500003002584,
    },
    '/static/css/pad/toolbar.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 0.750000006519258,
      fetchUntilResponseEndTime: 104.4850000180304,
      requestStartUntilResponseEndTime: 18.465000088326633,
      startUntilResponseEndTime: 104.4850000180304,
    },
    '/static/css/pad/popup.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 7.1000000461936,
      fetchUntilResponseEndTime: 121.5749999973923,
      requestStartUntilResponseEndTime: 35.38500005379319,
      startUntilResponseEndTime: 121.5749999973923,
    },
    '/static/css/pad/popup_connectivity.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 6.905000074766576,
      fetchUntilResponseEndTime: 121.00499996449798,
      requestStartUntilResponseEndTime: 34.89000000990927,
      startUntilResponseEndTime: 121.00499996449798,
    },
    '/static/css/pad/popup_import_export.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 6.690000067465007,
      fetchUntilResponseEndTime: 120.45000004582107,
      requestStartUntilResponseEndTime: 31.77000000141561,
      startUntilResponseEndTime: 120.45000004582107,
    },
    '/static/css/pad/popup_users.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 6.46999990567565,
      fetchUntilResponseEndTime: 119.81999990530312,
      requestStartUntilResponseEndTime: 30.65999993123114,
      startUntilResponseEndTime: 119.81999990530312,
    },
    '/static/css/pad/icons.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 14.04999999795109,
      fetchUntilResponseEndTime: 130.6949999416247,
      requestStartUntilResponseEndTime: 27.469999971799552,
      startUntilResponseEndTime: 130.6949999416247,
    },
    '/static/css/pad/chat.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 2.199999988079071,
      fetchUntilResponseEndTime: 132.82499997876585,
      requestStartUntilResponseEndTime: 18.745000008493662,
      startUntilResponseEndTime: 132.82499997876585,
    },
    '/static/css/pad/gritter.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 2.800000016577542,
      fetchUntilResponseEndTime: 150.03999997861683,
      requestStartUntilResponseEndTime: 29.229999985545874,
      startUntilResponseEndTime: 150.03999997861683,
    },
    '/static/css/pad/loadingbox.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 2.474999986588955,
      fetchUntilResponseEndTime: 145.14999999664724,
      requestStartUntilResponseEndTime: 24.259999976493418,
      startUntilResponseEndTime: 145.14999999664724,
    },
    '/static/css/pad/form.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 4.335000063292682,
      fetchUntilResponseEndTime: 151.16999996826053,
      requestStartUntilResponseEndTime: 30.29000002425164,
      startUntilResponseEndTime: 151.16999996826053,
    },
    '/static/skins/colibris/src/general.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 3.3650000113993883,
      fetchUntilResponseEndTime: 148.13999994657934,
      requestStartUntilResponseEndTime: 29.144999920390546,
      startUntilResponseEndTime: 148.13999994657934,
    },
    '/static/skins/colibris/src/layout.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 5.21499989554286,
      fetchUntilResponseEndTime: 149.78999993763864,
      requestStartUntilResponseEndTime: 22.0399999525398,
      startUntilResponseEndTime: 149.78999993763864,
    },
    '/static/skins/colibris/src/pad-editor.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 6.02000008802861,
      fetchUntilResponseEndTime: 152.30000007431954,
      requestStartUntilResponseEndTime: 22.520000115036964,
      startUntilResponseEndTime: 152.30000007431954,
    },
    '/static/skins/colibris/src/components/scrollbars.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 2.6700000744313,
      fetchUntilResponseEndTime: 153.7450000178069,
      requestStartUntilResponseEndTime: 11.470000026747584,
      startUntilResponseEndTime: 153.7450000178069,
    },
    '/static/skins/colibris/src/components/buttons.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 0.7800000021234155,
      fetchUntilResponseEndTime: 166.74499993678182,
      requestStartUntilResponseEndTime: 18.57499999459833,
      startUntilResponseEndTime: 166.74499993678182,
    },
    '/static/skins/colibris/src/components/popup.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 2.195000066421926,
      fetchUntilResponseEndTime: 169.4300000090152,
      requestStartUntilResponseEndTime: 21.27000002656132,
      startUntilResponseEndTime: 169.4300000090152,
    },
    '/static/skins/colibris/src/components/chat.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 3.2399999909102917,
      fetchUntilResponseEndTime: 170.17000005580485,
      requestStartUntilResponseEndTime: 21.880000014789402,
      startUntilResponseEndTime: 170.17000005580485,
    },
    '/static/skins/colibris/src/components/sidediv.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 3.389999968931079,
      fetchUntilResponseEndTime: 171.79000005126,
      requestStartUntilResponseEndTime: 23.539999965578318,
      startUntilResponseEndTime: 171.79000005126,
    },
    '/static/skins/colibris/src/components/gritter.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.3099999632686377,
      fetchUntilResponseEndTime: 177.83000005874783,
      requestStartUntilResponseEndTime: 27.254999964497983,
      startUntilResponseEndTime: 177.83000005874783,
    },
    '/static/skins/colibris/src/components/table-of-content.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.129999989643693,
      fetchUntilResponseEndTime: 177.18999995850027,
      requestStartUntilResponseEndTime: 25.254999985918403,
      startUntilResponseEndTime: 177.18999995850027,
    },
    '/static/skins/colibris/src/components/toolbar.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 4.2100000428035855,
      fetchUntilResponseEndTime: 194.63500007987022,
      requestStartUntilResponseEndTime: 29.93000007700175,
      startUntilResponseEndTime: 194.63500007987022,
    },
    '/static/skins/colibris/src/components/users.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 3.5199999110773206,
      fetchUntilResponseEndTime: 198.9899999462068,
      requestStartUntilResponseEndTime: 31.884999945759773,
      startUntilResponseEndTime: 198.9899999462068,
    },
    '/static/skins/colibris/src/components/form.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 5.8750000316649675,
      fetchUntilResponseEndTime: 201.2749999994412,
      requestStartUntilResponseEndTime: 33.49499998148531,
      startUntilResponseEndTime: 201.2749999994412,
    },
    '/static/skins/colibris/src/components/import-export.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 5.639999988488853,
      fetchUntilResponseEndTime: 200.56999998632818,
      requestStartUntilResponseEndTime: 30.99499992094934,
      startUntilResponseEndTime: 200.56999998632818,
    },
    '/static/skins/colibris/src/plugins/brightcolorpicker.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 4.550000070594251,
      fetchUntilResponseEndTime: 198.8950000377372,
      requestStartUntilResponseEndTime: 23.619999992661178,
      startUntilResponseEndTime: 198.8950000377372,
    },
    '/static/skins/colibris/src/plugins/font_color.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 6.0350000858306885,
      fetchUntilResponseEndTime: 200.17000008374453,
      requestStartUntilResponseEndTime: 24.910000036470592,
      startUntilResponseEndTime: 200.17000008374453,
    },
    '/static/skins/colibris/src/plugins/tables2.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 4.865000024437904,
      fetchUntilResponseEndTime: 207.4199999915436,
      requestStartUntilResponseEndTime: 15.325000043958426,
      startUntilResponseEndTime: 207.4199999915436,
    },
    '/static/skins/colibris/src/plugins/set_title_on_pad.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.879999996162951,
      fetchUntilResponseEndTime: 213.05000002030283,
      requestStartUntilResponseEndTime: 16.124999965541065,
      startUntilResponseEndTime: 213.05000002030283,
    },
    '/static/skins/colibris/src/plugins/author_hover.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 2.0200000144541264,
      fetchUntilResponseEndTime: 212.86500000860542,
      requestStartUntilResponseEndTime: 15.275000012479722,
      startUntilResponseEndTime: 212.86500000860542,
    },
    '/static/skins/colibris/src/plugins/comments.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.4349999837577343,
      fetchUntilResponseEndTime: 215.85000003688037,
      requestStartUntilResponseEndTime: 16.905000084079802,
      startUntilResponseEndTime: 215.85000003688037,
    },
    '/static/skins/colibris/src/pad-variants.css': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 1.9099999917671084,
      fetchUntilResponseEndTime: 215.18999990075827,
      requestStartUntilResponseEndTime: 17.110000015236437,
      startUntilResponseEndTime: 215.18999990075827,
    },
    '/static/font/Quicksand-Bold.ttf': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 10.215000016614795,
      fetchUntilResponseEndTime: 21.140000084415078,
      requestStartUntilResponseEndTime: 19.37500003259629,
      startUntilResponseEndTime: 21.140000084415078,
    },
    '/static/font/Quicksand-Medium.ttf': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 6.495000096037984,
      fetchUntilResponseEndTime: 24.8850000789389,
      requestStartUntilResponseEndTime: 22.59000006597489,
      startUntilResponseEndTime: 24.8850000789389,
    },
    '/static/font/fontawesome-etherpad.woff': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 6.245000055059791,
      fetchUntilResponseEndTime: 26.070000021718442,
      requestStartUntilResponseEndTime: 24.12499999627471,
      startUntilResponseEndTime: 26.070000021718442,
    },
    '/pluginfw/plugin-definitions.json': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 0.5700000328943133,
      fetchUntilResponseEndTime: 9.550000075250864,
      requestStartUntilResponseEndTime: 7.670000079087913,
      startUntilResponseEndTime: 9.550000075250864,
    },
    '/locales.json': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 7.780000101774931,
      fetchUntilResponseEndTime: 15.565000008791685,
      requestStartUntilResponseEndTime: 14.365000068210065,
      startUntilResponseEndTime: 15.565000008791685,
    },
    '/javascripts/lib/ep_performance_test_hooks/static/js/performance.js': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 76.88000006601214,
      fetchUntilResponseEndTime: 119.24999998882413,
      requestStartUntilResponseEndTime: 116.28499999642372,
      startUntilResponseEndTime: 119.24999998882413,
    },
    '/socket.io/': {
      redirectTime: 0,
      domainLookupTime: 0,
      tcpTime: 0,
      secureConnectionTime: '0',
      responseTime: 0.6150000263005495,
      fetchUntilResponseEndTime: 37.74499997962266,
      requestStartUntilResponseEndTime: 36.220000009052455,
      startUntilResponseEndTime: 37.74499997962266,
    },
  },
};

describe('Performance tests', function () {
  // create a new pad before each test run
  beforeEach(function (cb) {
    helper.newPad(cb);
    this.timeout(60000);
  });

  let stats;

  it('Gets test data and ensures they are within criteria', async function () {
    this.timeout(60000);
    stats = await getStats();
    stats.ep_performance_test_hooks.averageSize =
        getAverage(
            stats.ep_performance_test_hooks.loadSizes,
            'transferSize'
        );
    stats.ep_performance_test_hooks.averageFetchTime =
        getAverage(
            stats.ep_performance_test_hooks.loadTimes,
            'fetchUntilResponseEndTime'
        );
    testValues(stats);
  });

  it('Opens a second pad and it should be quicker and use less bandwidth', async function () {
    // Now we have all the initial values, let's bring up a new pad and
    // make sure the new values are lower and/or file size is smaller and/or
    // page load is quicker :)
    const newStats = await getStats();
    const newLoadAverage = getAverage(
        newStats.ep_performance_test_hooks.loadTimes,
        'fetchUntilResponseEndTime'
    );
    const newSizeAverage = getAverage(
        newStats.ep_performance_test_hooks.loadSizes,
        'transferSize'
    );

    if (newLoadAverage >= stats.ep_performance_test_hooks.averageFetchTime) {
      throw new Error(
          `Average fetch time ${newLoadAverage} was not faster than the
          first load ${stats.ep_performance_test_hooks.averageFetchTime}`);
    } else {
      // all good, but lets just let console know :)
      console.info(
          `Average fetch time ${newLoadAverage} of 2nd pad load was faster than the
        first load ${stats.ep_performance_test_hooks.averageFetchTime}`
      );
    }
    if (newSizeAverage >= stats.ep_performance_test_hooks.averageSize) {
      throw new Error(
          `Average size ${newSizeAverage} was not smaller than the
          first load ${stats.ep_performance_test_hooks.averageSize}`);
    } else {
      // all good, but lets just let console know :)
      console.info(
          `Average size ${newSizeAverage} of 2nd pad load was smaller than the
        first load ${stats.ep_performance_test_hooks.averageSize}`
      );
    }
  });
});

const getAverage = (stats, item) => {
  const items = [];
  for (const [key] of Object.entries(stats)) {
    items.push(stats[key][item]);
  }
  const itemsAvg = items.reduce((p, c) => p + c, 0) / items.length;
  return itemsAvg;
};

const getStats = () => new Promise(
    (resolve, reject) => {
      $.ajaxSetup({cache: false});
      // used to ensure the request is unique
      $.getJSON('/stats', (stats) => {
        resolve(stats);
      });
    });

const testValues = (stats) => {
  const startDurations = stats.startDurations;
  const loadTimes = stats.ep_performance_test_hooks.loadTimes;
  const loadSizes = stats.ep_performance_test_hooks.loadSizes;
  const perf = stats.ep_performance_test_hooks.performance;
  const etherpadHooks = stats.ep_performance_test_hooks.etherpadHooks;

  // startup durations push to server -- done! :)
  for (const [key, value] of Object.entries(startDurations)) {
    const requirement = requirements.startDurations[key];
    const x = `${key} too slow with output of ${value}, expected ${requirement}`;
    if (value > requirement) throw new Error(x);
  }

  // performance from the w3c performance spec
  const start = perf.connectStart;
  for (const [key, value] of Object.entries(perf)) {
    const requirement = requirements.perf[key] * 1.1;
    const valueLessStart = value - start;
    const x = `w3c spec performance: ${key} too slow with output of
        ${value - start}, expected ${requirement}`;
    if ((requirement > 0) && (valueLessStart > requirement)) throw new Error(x);
  }

  // file/resource timings IE /static/css/pad.css
  for (const [url, values] of Object.entries(loadTimes)) {
    for (const [test, value] of Object.entries(values)) {
      // we multiply here because it's approx the amount of latency
      // that having the iframe for the test runner seems to introduce?
      // I suggest more effort is put into this to validate it's validity
      // as a test.
      // TODO: Need help here please :)
      const requirement = requirements.loadTimes[url][test] * 7;
      const x = `file/resource timings: ${url} ${test} too slow with output of
          ${value}, expected ${requirement}`;
      if ((value >= 100) && (value > requirement)) throw new Error(x);
    }
  }

  // file/resource sizes IE https://whatever.com/pad.css?v1
  for (const [path, values] of Object.entries(loadSizes)) {
    for (const [test, value] of Object.entries(values)) {
      const requirement = requirements.loadSizes[path][test] * 1.1;
      const x = `file/resource size: ${path} ${test} too big with output of
          ${value}, expected ${requirement}`;
      if (value > requirement) throw new Error(x);
    }
  }

  // etherpad Hooks with documentReady as a base ref
  for (const [key, value] of Object.entries(etherpadHooks)) {
    const requirement = requirements.etherpadHooks[key] * 1.1;
    const duration = value - etherpadHooks.documentReady;
    const x = `hook: ${key} too slow with output of ${value - etherpadHooks.documentReady},
        expected ${requirement}`;
    if (duration > requirement) throw new Error(x);
  }
};
