import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import '../../ui/layouts/vcl-body.js';
import '../../ui/pages/home/home.js';
//TODO: import '../../ui/pages/not-found/not-found.js';

i18n.setLocale('en'); // For internationalization.

export const renderRoutes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
		</Route>
	</Router>
);
/*
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
}; */
