import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BaseComponent from './BaseComponent.jsx';

export default class Menu extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state, { open: false });
  }

  render() {
  // TODO: Only render Request Form if user is teacher (check from Canvas).
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-left">
              <img alt="UMD iSchool VCL" src="ischool.png" />
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="link-hover"><Link to="/about">About</Link></li>
            <li className="link-hover"><Link to="/help">Help</Link></li>
            <li className="link-hover"><Link to="/RequestForm">Request Form</Link></li>
            <li className="link-hover">{
              this.props.user
                ? <Link to="/signout" onClick={this.props.logout}>Logout</Link>
                : <Link to="/signin" onClick={this.props.login}>Login</Link>
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
