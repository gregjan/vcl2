import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//this is the header component which is used in App.js file
class Header extends Component {
  render() {
    return (
		  <nav className = "Header">
	      <div className="container-fluid">
		      <div className="row">
			      <div className = "Header-nav-li col-md-3" ></div>
			        <div className = "Header-nav col-md-6" align="right">
				        <div>
					        <ul className="Header-nav-ul">
					          <li className="Header-nav-li"><Link to ="/">Home</Link></li>
					          <li className="Header-nav-li"><Link to ="http://dcicblog.umd.edu/curatecloud/2016/03/09/curatecloud/" target="_blank">About</Link></li>
					          <li className="Header-nav-li"><Link to ="http://dcic.umd.edu/vcl-tutorial/" target="_blank">Help</Link></li>
					          <li className="Header-nav-li"><Link to ="https://docs.google.com/forms/d/e/1FAIpQLSd3cOQHDkwX1ZkN750JUrfx39Y-2JEmyHjPRGjo6Pukd_CB9Q/viewform?c=0&w=1" target="_blank">Request Form</Link></li>
				            <li className="Header-nav-li"><Link to ="/logout">Logout</Link></li>
					        </ul>
				        </div>
			        </div>
	          </div>
		      </div>
        </div>
	    </nav>
    );
  }
}

export default Header;
