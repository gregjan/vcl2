import React, { Component } from 'react';
import BaseComponent from './BaseComponent.jsx';

export default class TopNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="paddingTop40">
        <div className="panel panel-default">
          <div className="row">
            <div className="col-md-3" id="machine_name" align="right">
              Machine Name:
            </div>
            <div className="col-md-3 paddingLeft10" align="left"></div>
            <div className="col-md-5">
              <button>Full Screen</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
