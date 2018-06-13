import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import BaseComponent from '../components/BaseComponent.jsx';

Accounts.ui.config({
  requestPermissions: {
    canvas: ['example'],
  },
});

class SignIn extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state, { errors: {} });
  }

  render() {
    return (
      <script type="text/javascript">Meteor.loginWithCas([Meteor.loginWithCanvas()]);</script>
    );
  }
}

export default SignIn;
