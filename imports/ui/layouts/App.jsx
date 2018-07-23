import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types'; // Possibly use Typescript for this?
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Meteor } from 'meteor/meteor';

// Components:
import Menu from '../components/Menu.jsx';
import ConnectionNotification from '../components/ConnectionNotification.jsx';
import Loading from '../components/Loading.jsx';
// import Panel from '../components/Panel.jsx';

// Pages:
import AboutPage from '../pages/AboutPage.jsx';
import HelpPage from '../pages/HelpPage.jsx';
import RequestFormPage from '../pages/RequestFormPage.jsx';
import SigninPage from '../pages/SigninPage.jsx';
import GuacamolePage from '../pages/GuacamolePage.jsx';

const CONNECTION_ISSUE_TIMEOUT = 5000;

export default class App extends Component {
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

  logout() {
    Meteor.logout();
  }

  login() {
    Meteor.loginWithCas(() => {}); // TODO: Load login page rather than popup
  }

  renderContent(location) {
    const {
      user,
      connected,
      loading,
    } = this.props;
    const { showConnectionIssue } = this.state;

    return (
      <div id="container">
        <section id="menu">
          <Menu user={user} login={this.login} logout={this.logout} />
        </section>
        {showConnectionIssue && !connected
          ? <ConnectionNotification />
          : null}
        <div id="content-container">
          {loading ? (<Loading key="loading" />) : (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={200}
              >
                <Switch location={location}>
                  <Route
                    path="/"
                    exact
                    render={() => <GuacamolePage id="guacamole-client" />}
                  />
                  <Route
                    path="/about"
                    component={AboutPage}
                  />
                  <Route
                    path="/help"
                    component={HelpPage}
                  />
                  <Route
                    path="/RequestForm"
                    component={RequestFormPage}
                  />
                  <Route
                    path="/signin"
                    component={SigninPage}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            this.renderContent(location)
          )}
        />
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  connected: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

App.defaultProps = {
  user: null,
};
