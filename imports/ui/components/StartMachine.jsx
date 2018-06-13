import React, { Component } from 'react';

// All from react-sidenav
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
//import BorderNav from './BorderNav.jsx';
function handleClick(e){
  e.preventDefault();
}

export default class StartMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: {
        color: 'white'
      }
    };
  }

  render() {
    const color = this.state.color;

    return (
      <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='startStopButton'>
        <Nav id='machineInformation'>
          <NavText>Windows server 2016, NodeXL Basics, Google Chrome</NavText>
        </Nav>
        <nav>
          <div className="row">
            <div className="col-md-6 previous text-right paddingLeft20 "><button className="btn btn-primary">Start</button></div>
            <div className="col-md-6 next text-left"><button className="btn btn-primary">Stop</button></div>
          </div>
        </nav>
      </SideNav>
    )
  }
}
