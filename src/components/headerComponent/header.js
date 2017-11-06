import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//this is the header component which is used in App.js file
class Header extends Component {
  render() {
    return (
      <header className = "Header">
		<div className="Header-logo">
		LOGO
		</div>
		<p className="Header-nav-projectName">Project Name</p>
		<nav className="Header-nav" align="right"> 
			<ul className="Header-nav-ul">
				<li className="Header-nav-li"><Link to ="/">Home</Link></li>
				<li className="Header-nav-li"><Link to ="/about">About</Link></li>
				<li className="Header-nav-li"><Link to ="/help">Help</Link></li>
				<li className="Header-nav-li"><Link to ="/requestForm">Request Form</Link></li>
				<li className="Header-nav-li"><Link to ="/logout">Logout</Link></li>
			</ul>
		</nav> 	
	  </header>
    );
  }
}

export default Header;
