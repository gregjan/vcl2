import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContainer from '../../ui/containers/AppContainer.jsx';

export const renderRoutes = () => (
	<Router>
		<Route path="/" component={AppContainer} />
	</Router>
);
