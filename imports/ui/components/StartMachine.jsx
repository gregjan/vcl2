import React from 'react';

import SideNav, { Nav, NavText } from 'react-sidenav';

export default class StartMachine {
  render() {
    return (
      <SideNav highlightColor="#FFFFFF" highlightBgColor="#00bcd4" defaultSelected="startStopButton">
        <Nav id="machineInformation">
          <NavText>Windows server 2016, NodeXL Basics, Google Chrome</NavText>
        </Nav>
        <div className="row">
          <div className="col-md-6 previous text-right paddingLeft20 "><button className="btn btn-primary">Start</button></div>
          <div className="col-md-6 next text-left"><button className="btn btn-primary">Stop</button></div>
        </div>
      </SideNav>
    );
  }
}
