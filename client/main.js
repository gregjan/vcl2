<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
=======
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
>>>>>>> remotes/origin/user_accounts
