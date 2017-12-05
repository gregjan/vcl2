import { Meteor } from 'meteor/meteor';

import './vcl-body.html';

const CONNECTION_ISSUE_TIMEOUT = 5000;

Meteor.startup(() => {
	setTimeout(() => {
		showConnectionIssue.set(true);
	}, CONNECTION_ISSUE_TIMEOUT);
});
