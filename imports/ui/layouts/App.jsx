import React from 'react';
//For component loading transitions:
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/meteor';
//For API calls to MongoDB
//import { Lists } from '../../api/lists/lists.js';

//import ComponentName from '../components/component.jsx';
import Nav from '../components/Nav.jsx';
import LeftPanel from '../components/LeftPanel.jsx';
//import RightPanel from '../components/RightPanel.jsx';
//import ListList from '../components/ListList.jsx';
//import LanguageToggle from '../components/LanguageToggle.jsx';
//import ConnectionNotification from '../components/ConnectionNotification.jsx';
//import Loading from '../components/Loading.jsx';

const CONNECTION_ISSUE_TIMEOUT = 5000;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		 	//menuOpen: false,
		 	showConnectionIssue: false,
		 };
		//this.toggleMenu = this.toggleMenu.bind(this);
		//this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ showConnectionIssue: true });
		}, CONNECTION_ISSUE_TIMEOUT);
	}

	componentWillReceiveProps(/*{ loading, children }*/) {
		/*if (!loading && !children) {

		}*/
	}

	// toggleMenu(menuOpen = !Session.get('menuOpen'))
	//logout() {
		//Meteor.logout();

		/* if on private list, need to go to public one, see code in boilerplate */
	//}

	render() {
		/*const { showConnectionIssue } = this.state;
		const {
			user,
			connected,
		} = this.props;
*/
		return (
			<div id="container" className="container">
				<section id="menu">
					<Nav />
					<LeftPanel />
				</section>
			</div>
		);
	}
}

//				<RightPanel />
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
