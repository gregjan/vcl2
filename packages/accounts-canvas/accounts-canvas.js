'use strict';

Accounts.oauth.registerService('canvas');

if (Meteor.isClient) {
  Meteor.loginWithCanvas = function(options, callback) {
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Canvas.requestCredential(options, credentialRequestCompleteCallback);
  };

} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: _.map(
      Canvas.whitelistedFields.concat(['accessToken', 'expiresAt']),
        function(subfield) {
          return 'services.canvas.' + subfield;
      }),

    forOtherUsers: _.map(
      _.without(Canvas.whitelistedFields, 'email', 'verified_email'),
        function(subfield) {
          return 'services.canvas.' + subfield;
        })
    });
}
