import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';

// Import needed templates
//TODO: import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
//TODO: import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
	name: 'App.home',
	action: function(params, queryParams) {
		//TODO: default react view https://github.com/kadirahq/meteor-react-layout
	},
});

FlowRouter.notFound = {
	action () {
		//TODO: notFound view
	},
};
