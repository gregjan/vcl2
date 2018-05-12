import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-left">
                <img alt="UMD iSchool VCL" src="ischool.png"/>
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="link-hover">
                <Link to="/about">About</Link>
              </li>
              <li className="link-hover">
                <Link to="/help">Help</Link>
              </li>
              <li className="link-hover">
                <Link to="/RequestForm">Request Form</Link>
              </li>
              <li className="link-hover">
                {
                  this.props.user
                    ? <Link to="/signout" onClick={this.props.logout}>Logout</Link>
                    : <Link to="/signin" onClick={this.props.login}>Login</Link>
                }
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

Menu.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};
