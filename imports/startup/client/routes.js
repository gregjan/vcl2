import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import '../../ui/layouts/vcl-body.js';
import '../../ui/pages/home/home.js';
//TODO: import '../../ui/pages/not-found/not-found.js';

const WelcomeComponent = ({name}) => (<p>Hello, {name}</p>);

// Set up all routes in the app
FlowRouter.route('/', {
	name: 'VCL.home',
	action() {
		const MainLayout = ({content}) => (
			<div>
				<main>
					{content}
				</main>
			</div>
		);
		mount(MainLayout, {
			content: <WelcomeComponent name="Arunoda" />
		});
		//TODO: default react view https://github.com/kadirahq/meteor-react-layout
	},
});

FlowRouter.notFound = {
	action () {
		//TODO: notFound view
	},
};
