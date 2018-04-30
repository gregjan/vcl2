import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import AddMachine from '../AddEvent';

function handleClick(e){
        e.preventDefault();
        }
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };//Object.assign(this.state, { open: false });
    this.toggle = this.toggle.bind(this);

    this.state = {
      showComponent: false,
      };

    this.RenderAdminPage=this.RenderAdminPage.bind(this);
  }

  toggle(e) {
    e.stopPropagation();
    this.setState({
      open: !this.state.open,
    });
  }

  RenderAdminPage() {
    this.setState({
      showComponent: !this.state.showComponent,
    });
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
              <li className="test"><Link to="/about">About</Link></li>
              <li className="test"><Link to="/help">Help</Link></li>
              <li className="test"><Link to="/RequestForm">Request Form</Link></li>
              <li className="test">
                {this.props.user ?
                  <Link to="/signout" onClick={this.props.logout}>Logout</Link> :
                  <Link to="/signin" onClick={this.props.login}>Login</Link>}
              </li>
              <li><a href="#" onClick={this.RenderAdminPage}>Admin</a></li>
                  {this.state.showComponent ?
                    <AddMachine /> :
                     null
                   }
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Menu;

Menu.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};
