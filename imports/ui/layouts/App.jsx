import React from 'react';
//For component loading transitions:
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/meteor';
//For API calls to MongoDB
//import { Lists } from '../../api/lists/lists.js';

//import ComponentName from '../components/component.jsx';
//import UserMenu from '../components/UserMenu.jsx';
//import ListList from '../components/ListList.jsx';
//import LanguageToggle from '../components/LanguageToggle.jsx';
//import ConnectionNotification from '../components/ConnectionNotification.jsx';
//import Loading from '../components/Loading.jsx';

const CONNECTION_ISSUE_TIMEOUT = 5000;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		/* set component states */
		/* this.state = {
		 * 	menuOpen: false,
		 * 	showConnectionIssue: false,
		 * }; */
		//this.toggleMenu = this.toggleMenu.bind(this);
		this.logout = this.logout.bind(this);
	}

	/* functions to write:
	 * componentDidMount()
	 * componentWillReceiveProps({ loading, children })
	 * toggleMenu(menuOpen = !Session.get('menuOpen'))
	 */

	logout() {
		Meteor.logout();

		/* if on private list, need to go to public one, see code in boilerplate */
	}

	render() {
	// For debugging:	const { showConnectionIssue } = this.state;
		const {
			user,
			connected,

		} = this.props;

		return (
			<div className="container">
				<section id="main">
					Test
				</section>
			</div>
		);
	}
}

App.propTypes = {
	user: React.PropTypes.object,					// current meteor user
	connected: React.PropTypes.bool,			// server connection status
	/* loading: React.PropTypes.bool, 		// subscription status
	 * menuOpen: React.PropTypes.bool, 		// checks side menu open status
	 * lists: React.PropTypes.array, 			// all listsl visible to current user
	 * children: React.PropTypes.element, // matched child route component
}
