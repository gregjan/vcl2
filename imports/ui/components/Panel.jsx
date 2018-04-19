import React from 'react';

import SideNav, { Nav }from 'react-sidenav';
import { TableHeaderColumn } from 'react-bootstrap-table';
import { Route } from 'react-router-dom';
// Internally developed.
import BaseComponent from './BaseComponent.jsx';
import BorderNav from './BorderNav.jsx';
import BootTable from './BootTable.jsx';

import About from '../pages/About.jsx';
import Help from '../pages/Help.jsx';
import Signin from '../pages/Signin.jsx';
import RequestForm from '../pages/RequestForm.jsx';

export default class Panel extends React.Component {
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
      <div className="Body-side-div">
        <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='labs'>
          <BorderNav navId='labs' navText='Labs' />
          <BorderNav navId='sandbox' navText='Sandbox' />
        </SideNav>
        <BootTable className="paddingTop10" />
      </div>
    </div>
  <div className="col-md-6">
    <Route path='/about' component={About}/>
    <Route path='/help' component={Help}/>
    <Route path='/requestform' component={RequestForm}/>
    <Route path='/signin' component={Signin}/>
  </div>
  <div className="col-md-3">
    <div className="Body-side-div">
      <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='labMachines'>
        <BorderNav navId='labMachines' navText='Labs' />
        <div>
          <BootTable />
        </div>
        <BorderNav className="paddingTop10" navId='machine_1' navText='Manage Lab Machines' />
      </SideNav>
      <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='startStopButton'>
        <BorderNav navId='machineInformation' navText='Windows server 2016, NodeXL Basics, Google Chrome' />
        <Nav>
          <div className="row">
            <button className="width40Percent height50Percent" align="center" onClick={function(){}}>Start</button>
            <button className="width40Percent paddingLeft10" align="left">Stop</button>
          </div>
        </Nav>
      </SideNav>
    </div>
  </div>
</div>
</div>);
  }
}
