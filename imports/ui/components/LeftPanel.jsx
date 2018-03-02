import React, { Component } from 'react';

// Internally developed.
import BaseComponent from './BaseComponent.jsx';
import LeftNav from './LeftNav.jsx';
import BootTable from './BootTable.jsx';

export default class LeftPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
<div className="container-fluid">
  <div className="row">
    <div className="col-md-3">
      <div className="Body_left_div">
        <LeftNav />
        <div className="paddingTop10"></div>
        <BootTable />
      </div>
    </div>
  <div className="col-md-6 paddingLeft10"></div>
  <div className="col-md-3">
    <div className="Body_right_div">
      <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='labMachines'>
        <Nav id='labMachines'>
          <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
          <NavText><a href="#" style={color} onClick={this.manageLabList}>Manage Lab Machines</a></NavText>
        </Nav>
        <div>
          <BootstrapTable data={this.state.ManageLabList} striped hover selectRow={ selectManageMachine } options={options}>
            <TableHeaderColumn isKey dataField="lab_name">Lab Name</TableHeaderColumn>
            <TableHeaderColumn dataField="instructor">Instructor</TableHeaderColumn>
          </BootstrapTable>
        </div>
        <div className="paddingTop10"></div>
        <Nav id='machine_1'>
          <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
          <NavText>Machine Information:</NavText>
        </Nav>
      </SideNav>
      <div>
        <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='startStopButton'>
          <Nav id='machineInformation'>
            <NavText>Windows server 2016, NodeXL Basics, Google Chrome</NavText>
          </Nav>
          <Nav>
            <div className="row">
              <div className="width40Percent height50Percent" align="center">
                <button onClick={handleClick}>Start </button>
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
