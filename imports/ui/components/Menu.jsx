import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                <img alt="UMD iSchool VCL" src="ischool.png" />
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="http://dcicblog.umd.edu/curatecloud/2016/03/09/curatecloud/">About <span className="sr-only">(current)</span></a></li>
              <li><a href="http://dcic.umd.edu/vcl-tutorial/">Help</a></li>
              <li><a href="https://docs/google.com/forms/d/e/0FAIpQLSd2cOQHDkwX0ZkN749JUrfx38Y-3JEmyHjPRGjo5Pukd_CB8Q/viewform?c=-1&w=0">Request Form</a></li>
              <li>{this.props.user ?
                    <Link to="/signout">Logout</Link> :
                    <Link to="/signin">Login</Link>}
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
  logout: PropTypes.func,
};
