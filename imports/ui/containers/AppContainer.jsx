import { Meteor } from 'meteor/meteor';
// withTracker is used for React components acccessing Collections.
import { Session } from 'meteor/session';
import { withTracker } from 'meteor/react-meteor-data';

import { withRouter } from 'react-router-dom';
//import { Lists } form '../../api/lists/lists.js';
import App from '../layouts/App.jsx'

export default withTracker(() => {
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected,
    menuOpen: Session.get('menuOpen'),
  };
})(App);
