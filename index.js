var settings = require('ep_etherpad-lite/node/utils/Settings');

// Get settings

exports.clientVars = function (hook, context, callback) {
  var areParamsOk = !!settings.ep_solar,
    lat,
    lon;
  if (areParamsOk) {
    lat = settings.ep_solar.lat;
    lon = settings.ep_solar.lon;

    areParamsOk =
      typeof lat === 'number' &&
        lat >= -90 &&
        lat <= 90 &&
        typeof lon === 'number' &&
        lon >= -180 &&
        lon <= 180;
    if (areParamsOk === false) {
      console.error(
        'ep_solar.lat and ep_solar.lon must be in decimal degrees, latitude must be between -90 and 90 and longitude between -180 and 180.'
      );
      return callback({
        ep_solar_settings: false,
      });
    } else {
      // return the setting to the clientVars, sending the value
      return callback({
        lat: settings.ep_solar.lat,
        lon: settings.ep_solar.lon,
      });
    }
  } else {
    console.error('You need to configure ep_solar in your settings.json!');
  }
};
