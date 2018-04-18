import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import AddMachine from '../components/AddEvent';

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

  renderLoggedIn() {
    const { open } = this.state;
    const { user, logout } = this.props;

    return(
      <a href="#toggle" className="" onClick={this.toggle}>Logout</a>
    );
  }

  renderLoggedOut() {
        //<a href="#">Login</a>

        //<Link to="/signin"></Link>
    return (
      <Link to="/signin">Login</Link>
    )
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
              <a className="navbar-left" href="#">
                <img alt="UMD iSchool VCL" src="ischool.png" />
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="http://dcicblog.umd.edu/curatecloud/2016/03/09/curatecloud/">About <span className="sr-only">(current)</span></a></li>
              <li><a href="http://dcic.umd.edu/vcl-tutorial/">Help</a></li>
              <li><a href="https://docs/google.com/forms/d/e/0FAIpQLSd2cOQHDkwX0ZkN749JUrfx38Y-3JEmyHjPRGjo5Pukd_CB8Q/viewform?c=-1&w=0">Request Form</a></li>
              <li>{this.props.user ?
                    this.renderLoggedIn() :
                    this.renderLoggedOut()}</li>
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
