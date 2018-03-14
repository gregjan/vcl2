import React, { Component } from 'react';

var color = {
 color: 'white'
};
export default class HeadNav extends Component {
  constructor(props) {
    super(props);
  }

render() {
	return(
		<nav className="Header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 logo">
						<img src="img/ischool.png" alt="logo"/>
					</div>
					<div className="Header-nav-li col-md-3">
						<p><a href="./" style={color}>Virtual Computing Lab</a></p>
					</div>
					<div className="Header-nav col-md-6" align="right">
						<div>
							<ul className="Header-nav-ul">
								<li className="Header-nav-li"><a href="./" style={color}>Home</a></li>
								<li className="Header-nav-li"><a href="http://dcicblog.umd.edu/curatecloud/2016/03/09/curatecloud/" style={color}>About</a></li>
								<li className="Header-nav-li"><a href="http://dcic.umd.edu/vcl-tutorial/" style={color}>Help</a></li>
								<li className="Header-nav-li"><a href="https://docs/google.com/forms/d/e/1FAIpQLSd3cOQHDkwX1ZkN750JUrfx39Y-2JEmyHjPRGjo6Pukd_CB9Q/viewform?c=0&w=1" style={color}>Request Form</a></li>
								<li className="Header-nav-li"><a href="/logout" style={color}>Logout</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
	}
}