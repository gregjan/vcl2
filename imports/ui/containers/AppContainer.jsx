import { Meteor } from 'meteor/meteor';

import { Session } from 'meteor/session';
import { withTracker } from 'meteor/react-meteor-data';

//import { Lists } form '../../api/lists/lists.js';
import App from '../layouts/App.jsx'

export default withTracker(() => {
  //const publicHandle = Meteor.subscribe('lists.public');
  //const privateHandle = Meteor.subscribe('lists.private');
  return {
    user: Meteor.user(),
    //loading: !(publicHandle.ready() && privateHandle.ready()),
    connected: Meteor.status().connected,
    //menuOpen: Session.get('menuOpen'), Depends on App.jsx
    /*lists: Lists.find({ $or: [
      { userId: { $exists: false } },
      { userId: Meteor.userId() },
    ] }).fetch(), */
  };
})(App);
