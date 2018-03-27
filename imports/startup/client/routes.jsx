import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.jsx';

//import '../../ui/layouts/vcl-body.js';
//import '../../ui/pages/home/home.js';
//TODO: import '../../ui/pages/not-found/not-found.js';
/*
export const renderRoutes = () => (
	<Router>
		<Route path="/" component={AppContainer}>
			<Route path="signin" component={AuthPageSignIn}></Route>
		</Route>
	</Router>
);
*/
const browserHistory = createBrowserHistory();

export const renderRoutes = () =>(
	<Router history={browserHistory}>
		<Switch>
			<Route exact path="/" component={AppContainer}/>
			<Route exact path="/signin" component={AuthPageSignIn}/>
		</Switch>
	</Router>
);
