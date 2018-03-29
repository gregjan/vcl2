import React from 'react';

import { Router, Route, BrowserHistory } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.jsx';
//			<Route path="/signin" component={AuthPageSignIn}/>
const createBrowserHistory = createHistory();

export const renderRoutes = () => (
	<Router history={createBrowserHistory}>
		<AppContainer>
			<Route path="/sigin" component={AuthPageSignIn} />
		</AppContainer>
	</Router>
);
