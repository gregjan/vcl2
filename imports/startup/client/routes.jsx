import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import i18n from 'meteor/universe:i18n';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
// import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.jsx';

//import '../../ui/layouts/vcl-body.js';
//import '../../ui/pages/home/home.js';
//TODO: import '../../ui/pages/not-found/not-found.js';

// i18n.setLocale('en'); // For internationalization.

export const renderRoutes = () => (
	<BrowserRouter>
		<Route path="/" component={AppContainer}/>
	</BrowserRouter>
);


		//	<Route path="signin" component={AuthPageSignIn} />
