import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'; // Possibly use Typescript for this?
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Meteor } from 'meteor/meteor';

// Components:
import Menu from '../components/Menu.jsx';
import ConnectionNotification from '../components/ConnectionNotification.jsx';
import Loading from '../components/Loading.jsx';
import Panel from '../components/Panel.jsx';

// Pages:
import AboutPage from '../pages/AboutPage.jsx';
import HelpPage from '../pages/HelpPage.jsx';
import RequestFormPage from '../pages/RequestFormPage.jsx';
import SigninPage from '../pages/SigninPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

const CONNECTION_ISSUE_TIMEOUT = 5000;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showConnectionIssue: false,
      defaultList: null,
      redirectTo: null,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.toggleMenu.bind(this, false);
    this.logout = this.logout.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    const newState = { defaultList: null, redirectTo: null };
    if (!nextProps.loading) {
      newState.defaultList = '/about';
    }
    return newState;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showConnectionIssue: true });
    }, CONNECTION_ISSUE_TIMEOUT);
  }

  toggleMenu() {
    this.props.menuOpen.set(!this.props.menuOpen.get());
  }

  logout() {
    Meteor.logout();
    this.setState({
      redirectTo: this.state.defaultList,
    });
  }

  login() {
    Meteor.loginWithCas(() => {}); // TODO: Load login page rather than popup
  }

  renderRedirect(location) {
    const { redirectTo, defaultList } = this.state;
    const { pathname } = location;
    let redirect = null;
    if (redirectTo && redirectTo !== pathname) {
      redirect = <Redirect to={redirectTo} />;
    } else if (pathname === '/' && defaultList) {
      redirect = <Redirect to={defaultList} />;
    }
    return redirect;
  }

  renderContent(location) {
    const {
      user,
      connected,
      menuOpen,
      loading,
    } = this.props;
    const { showConnectionIssue } = this.state;

    const commonChildProps = {
      menuOpen: this.props.menuOpen,
    };

    return (
      <div id="container" className={menuOpen ? 'menu-open' : ''}>
        <section id="menu">
          <Menu user={user} login={this.login} logout={this.logout} />
        </section>
        {showConnectionIssue && !connected
          ? <ConnectionNotification />
          : null}
        <div className="content-overlay" onClick={this.closeMenu} />
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
                    path="/about"
                    render={() => <AboutPage {...commonChildProps} />}
                  />
                  <Route
                    path="/help"
                    render={() => <HelpPage {...commonChildProps} />}
                  />
                  <Route
                    path="/RequestForm"
                    render={() => <RequestFormPage {...commonChildProps} />}
                  />
                  <Route
                    path="/signin"
                    render={() => <SigninPage {...commonChildProps} />}
                  />
                  <Route
                    path="/*"
                    render={() => <Panel {...commonChildProps} />}
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
            this.renderRedirect(location) || this.renderContent(location)
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
  menuOpen: PropTypes.object.isRequired,
};

App.defaultProps = {
  user: null,
};
