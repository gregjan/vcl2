import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({ // https://docs.meteor.com/api/accounts.html#Accounts-ui-config
  requestPermissions: {
    canvas: ['example']
  }
});
