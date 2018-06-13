import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { withTracker } from 'meteor/react-meteor-data';

import App from '../layouts/App.jsx';

const menuOpen = new ReactiveVar(false);

export default withTracker(() => ({
  user: Meteor.user(),
  loading: false,
  connected: Meteor.status().connected,
  menuOpen,
}))(App);
