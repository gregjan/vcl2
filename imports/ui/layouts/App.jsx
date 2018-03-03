import React from 'react';
//For component loading transitions:
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/meteor';

//For API calls to MongoDB
//import { Lists } from '../../api/lists/lists.js';

//import ComponentName from '../components/component.jsx';
import TopNav from '../components/TopNav.jsx';
import LeftPanel from '../components/LeftPanel.jsx';

const CONNECTION_ISSUE_TIMEOUT = 5000;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		 	showConnectionIssue: false,
		 };
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ showConnectionIssue: true });
		}, CONNECTION_ISSUE_TIMEOUT);
	}

	componentWillReceiveProps() {
	}


	render() {
		return (
			<div className="container-fluid">
				<TopNav />
				<LeftPanel />
			</div>
		);
	}
}

/*
App.propTypes = {
	user: React.PropTypes.object,					// current meteor user
	connected: React.PropTypes.bool,			// server connection status
	  loading: React.PropTypes.bool, 			// subscription status
	  menuOpen: React.PropTypes.bool, 		// checks side menu open status
	  lists: React.PropTypes.array, 			// all lists visible to current user
	  children: React.PropTypes.element,  // matched child route component
};

App.contextTypes = {
	router: React.PropTypes.object,
}; */
