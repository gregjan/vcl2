import React, { Component } from 'react';

export default class HeadNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: {
        color: 'white'
      },
    };
  }

render() {
	return(
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
        </div>
      </nav>
      <div className="Header">
				<div className="row">
					<div className="col-md-3 logo">
						<img src="img/ischool.png" alt="logo"/>
					</div>
					<div className="Header-nav-li col-md-3">
						<p><a href="./" style={this.state.color}>Virtual Computing Lab</a></p>
					</div>
					<div className="Header-nav col-md-6" align="right">
						<div>
							<ul className="Header-nav-ul">
								<li className="Header-nav-li"><a href="./" style={this.state.color}>Home</a></li>
								<li className="Header-nav-li"><a href="http://dcicblog.umd.edu/curatecloud/2016/03/09/curatecloud/" style={this.state.color}>About</a></li>
								<li className="Header-nav-li"><a href="http://dcic.umd.edu/vcl-tutorial/" style={this.state.color}>Help</a></li>
								<li className="Header-nav-li"><a href="https://docs/google.com/forms/d/e/1FAIpQLSd3cOQHDkwX1ZkN750JUrfx39Y-2JEmyHjPRGjo6Pukd_CB9Q/viewform?c=0&w=1" style={this.state.color}>Request Form</a></li>
								<li className="Header-nav-li"><a href="/logout" style={this.state.color}>Logout</a></li>
							</ul>
						</div>
					</div>
				</div>
      </div>
    </div>
  	);
	}
}
