'use strict';

Canvas = {};

Canvas.requestCredential = (credentialToken, credentialSecret) => {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};

Canvas.whitelistedFields = ['id', 'email', 'reputation', 'created'];

OAuth.registerService('canvas', 2, null, function(query) {
  const config = ServiceConfiguration.configurations.findOne({
    service: 'canvas'
  });

  const response = getTokens(config, query);
  const accessToken = response.accessToken;
  const username = response.username;

  const identity = _.extend(
    {username},
    getAccount(config, username, accessToken),
    getSettings(config, username, accessToken)
  );

  const serviceData = {
    accessToken,
    expiresAt: (+new Date) + (1000 * response.expiresIn)
  };
  if(response.refreshToken) {
    serviceData.refreshToken = response.refreshToken;
  }
  _.extend(serviceData, _.pick(identity, Canvas.whitelistedFields));

  return {
    serviceData: serviceData,
    options: {
      profile: {
        name: response.username
      }
    }
  };
});

const getTokens = function(config, query) {
  const endpoint = 'https://umd.test.instructure.com/login/oauth2/token';
  let response;
  try {
    response = HTTP.post(
      endpoint, {
        params: {
          code: query.code,
          client_id: config.client_id,
          client_secret: OAuth.openSecret(config.secret),
          grant_type: 'authorization_code'
        }
      });
  } catch (err) {
    throw _.extend(new Error('Failed to complete OAuth handshake with ELMS. ${err.message}'), {
      response: err.response
    });
  }

  if (response.data.error) {
    throw new Error(`Failed to complete OAuth handshake with ELMS. ${response.data.error}`);
  } else {
    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresIn: response.data.expires_in,
      username: response.data.account_username
    };
  }
};

const getAccount = function(config, username, accessToken) {
  const endpoint = `https://umd.test.instructure.com/account/${username}`;
  let accountObject;

  try {
    accountObject = HTTP.get(
      endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    ).data.data;
    return accountObject;
  } catch (err) {
    throw _.extend(new Error(`Failed to fetch account data from ELMS. ${err.message}`), {
      response: err.response
    });
  }
};

const getSettings = function(config, username, accessToken) {
  const endpoint = `https://umd.test.instructure.com/account/${username}/settings`;
  let settingsObject;

  try {
    settingsObject = HTTP.get(
      endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    ).data.data;
    return settingsObject;

  } catch (err) {
    throw _.extend(new Error(`Failed to fetch settings data from ELMS. ${err.message}`), {
      response: err.response
    });
  }
};
