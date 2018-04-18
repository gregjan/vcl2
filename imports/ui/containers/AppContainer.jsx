import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
// withTracker is used for React components acccessing Collections.
import { withTracker } from 'meteor/react-meteor-data';

//import { Lists } form '../../api/lists/lists.js';
import App from '../layouts/App.jsx'
import { Tasks } from '../../api/events.js';

export default withTracker(() => {
  //const publicHandle = Meteor.subscribe('lists.public');
  //const privateHandle = Meteor.subscribe('lists.private');
  return {
    user: Meteor.user(),
    //loading: !(publicHandle.ready() && privateHandle.ready()),
    connected: Meteor.status().connected,
    menuOpen: Session.get('menuOpen'),
    tasks: Tasks.find({}).fetch(),
    /*lists: Lists.find({ $or: [
      { userId: { $exists: false } },
      { userId: Meteor.userId() },
    ] }).fetch(), */
  };
})(App);
