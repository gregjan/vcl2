'use strict';

Canvas = {};

Canvas.requestCredential = function(options, credentialRequestCompleteCallback) {

  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    credentialRequestCompleteCallback = options;
    options = {};
  } else if (!options) {
    options = {};
  }

  const config = ServiceConfiguration.configurations.findOne({
    service: 'canvas'
  });
  if (!config) {
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(
      new ServiceConfiguration.ConfigError()
    );
    return;
  }

  const credentialToken = Random.secret();
  const loginStyle = OAuth._loginStyle('canvas', config, options);

  const loginUrl = 'https://umd.test.instructure.com/login/oauth2/auth' + 
    '?response_type=code' +
    '&client_id=' + config.clientId +
    '&state=' + OAuth._stateParam(loginStyle, credentialToken);

  OAuth.launchlogin({
    loginService: 'canvas',
    loginStyle: loginStyle,
    loginUrl: loginUrl,
    credentialRequestCompleteCallback: credentialRequestCompleteCallback,
    credentialToken: credentialToken,
    popupOptions: {
      height: 600
    }
  });
};
