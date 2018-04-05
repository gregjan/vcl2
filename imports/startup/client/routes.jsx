import React from 'react';

import { Router, Route, BrowserHistory } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.jsx';
//			<Route path="/signin" component={AuthPageSignIn}/>

export const renderRoutes = () => (
	<Router>
		<AppContainer />
	</Router>
);
