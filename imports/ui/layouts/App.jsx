import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types'; //Possibly use Typescript for this?

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Panel from '../components/Panel.jsx';
import Menu from '../components/header/Menu.jsx'

const CONNECTION_ISSUE_TIMEOUT = 5000;

 export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		 	showConnectionIssue: false,
		};
		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ showConnectionIssue: true });
		}, CONNECTION_ISSUE_TIMEOUT);
	}

	componentWillReceiveProps({ children }) {
		// TODO: const list = List of parsed return from aws_sdk.
	}

	login() {
		Meteor.loginWithCas(function(){}); //TODO: Load login page rather than popup
	}

	logout() {
		Meteor.logout();
		// remove private lists, Rerender lists to be empty.
	}

	render() {
		const { showConnectionIssue } = this.state;
		const {
			user,
			connected,
			menuOpen,
			children,
			location,
		} = this.props;

		return (
			<div>
				<Menu user={user} login={this.login} logout={this.logout} />
				<Panel task={this.props.tasks} />
			</div>
		);
	}
}


App.propTypes = {
	user: PropTypes.object,					// current meteor user
	connected: PropTypes.bool,			// server connection status
	menuOpen: PropTypes.bool, 		  // checks side menu open status
	children: PropTypes.element,    // matched child route component
};

App.contextTypes = {
	router: PropTypes.object,
};
