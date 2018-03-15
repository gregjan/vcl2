import React from 'react';
import PropTypes from 'prop-types'; //Possibly use Typescript for this?
//For component loading transitions: import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

//For API calls to MongoDB
//import { Lists } from '../../api/lists/lists.js';

//import ComponentName from '../components/component.jsx';
import TopNav from '../components/TopNav.jsx';
import LeftPanel from '../components/LeftPanel.jsx';
import HeadNav from '../components/HeadNav.jsx'

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

	componentWillReceiveProps() {
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
			//loading,
			menuOpen,
		} = this.props;

		const closeMenu = this.toggleMenu.bind(this, false);

		return (
		<div className="container-fluid">
			<HeadNav />
			//<div className={menuOpen ? 'menu-open' : ''} />
			<TopNav />
			<LeftPanel />
		</div>
		);
	}
}

App.propTypes = {
	user: PropTypes.object,					// current meteor user
	connected: PropTypes.bool,			// server connection status
//	  loading: React.PropTypes.bool, 			// subscription status
	menuOpen: PropTypes.bool, 		// checks side menu open status
	//  lists: React.PropTypes.array, 			// all lists visible to current user
	 // children: React.PropTypes.element,  // matched child route component
};

App.contextTypes = {
	router: PropTypes.object,
};
