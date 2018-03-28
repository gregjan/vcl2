import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import PropTypes from 'prop-types'; //Possibly use Typescript for this?

//For API calls to MongoDB
//import { Lists } from '../../api/lists/lists.js';

import LeftPanel from '../components/LeftPanel.jsx';
import Menu from '../components/Menu.jsx'

const CONNECTION_ISSUE_TIMEOUT = 5000;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		 	showConnectionIssue: false,
		};
		this.toggleMenu = this.toggleMenu.bind(this);
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

	toggleMenu(menuOpen = !Session.get('menuOpen')) {
		Session.set({ menuOpen });
	}

	logout() {
		Meteor.logout();
		// remove private lists, Rerender lists to be empty. Rerender Nav (with correct button text)
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

		const closeMenu = this.toggleMenu.bind(this, false);
		const clonedChildren = children && React.cloneElement(children, {
			key: location.pathname,
		});

		return (
		<div id="container" className={menuOpen ? 'menu-open' : ''}>
			<section id="menu">
				<Menu user={user} logout={this.logout} />
				<LeftPanel />
			</section>
			<div className="content-overlay" onClick={closeMenu} />
			<div id="content-container">
				<ReactCSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout={200}
					transitionLeaveTimeout={200}
				>
					{clonedChildren}
				</ReactCSSTransitionGroup>
			</div>
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
