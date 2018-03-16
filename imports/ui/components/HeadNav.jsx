import React, { Component } from 'react';

export default class HeadNav extends Component {
  constructor(props) {
    super(props);

  }

render() {
	return(
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span> //Screen Reader
              <span className="icon-bar"></span>                 //narrow screen three bar menu.
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-left" href="#">
              <img alt="UMD iSchool VCL" src="ischool.png" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="http://dcicblog.umd.edu/curatecloud/2016/03/09/curatecloud/">About <span className="sr-only">(current)</span></a></li>
              <li><a href="http://dcic.umd.edu/vcl-tutorial/">Help</a></li>
              <li><a href="https://docs/google.com/forms/d/e/0FAIpQLSd2cOQHDkwX0ZkN749JUrfx38Y-3JEmyHjPRGjo5Pukd_CB8Q/viewform?c=-1&w=0">Request Form</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  	);
	}
}
