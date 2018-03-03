import React, { Component } from 'react';

import SideNav, { Nav } from 'react-sidenav';
import { TableHeaderColumn } from 'react-bootstrap-table';

// Internally developed.
import BaseComponent from './BaseComponent.jsx';
import BorderNav from './BorderNav.jsx';
import BootTable from './BootTable.jsx';

export default class LeftPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      manageLabList: (props) => {
        axios.get('http://localhost:443/getManageLabList')
          .then((response) => {
            alert(JSON.stringify(response));
          })
      },
    }
  }

  render() {
    return(
<div className="container-fluid">
  <div className="row">
    <div className="col-md-3">
      <div className="Body_left_div">
        <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='labs'>
          <BorderNav navId='labs' navText='Labs' />
          <BorderNav navId='sandbox' natText='Sandbox' />
        </SideNav>
        <div className="paddingTop10"></div>
        <BootTable />
      </div>
    </div>
  <div className="col-md-6 paddingLeft10"></div>
  <div className="col-md-3">
    <div className="Body_right_div">
      <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='labMachines'>
        <BorderNav navId='labMachines' navText='Labs' />
        <div>
          <BootTable />
        </div>
        <div className="paddingTop10"></div>
        <BorderNav navId='machine_1' navText='Manage Lab Machines' />
      </SideNav>
      <div>
        <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='startStopButton'>
          <BorderNav navId='machineInformation' navText='Windows server 2016, NodeXL Basics, Google Chrome' />
          <Nav>
            <div className="row">
              <div className="width40Percent height50Percent" align="center">
                <button onClick={function(){}}>Start</button>
              </div>
              <div className="width40Percent paddingLeft10" align="left">
                <button>Stop</button>
              </div>
            </div>
          </Nav>
        </SideNav>
      </div>
    </div>
  </div>
</div>
</div>);
  }
}
