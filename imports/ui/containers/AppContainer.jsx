import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { withTracker } from 'meteor/react-meteor-data';

import App from '../layouts/App.jsx'
import { Tasks } from '../../api/events.js';

export default withTracker(() => {
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected,
    menuOpen: Session.get('menuOpen'),
    tasks: Tasks.find({}).fetch(),
    /*lists: Lists.find({ $or: [
      { userId: { $exists: false } },
      { userId: Meteor.userId() },
    ] }).fetch(), */
  };
})(App);
