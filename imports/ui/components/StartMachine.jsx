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

    return(
        <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='startStopButton'>       
            <Nav id='machineInformation'>   
              <NavText>Windows server 2016, NodeXL Basics, Google Chrome</NavText>
            </Nav>
            <nav>
            <button className="btn btn-primary">Start</button>
            <button className="btn btn-primary">Stop</button>
              {/*<div className="row">
                <div className="width40Percent height50Percent" align="center">
                  <button onClick={handleClick}>Start </button>
                </div>
                <div className="width40Percent  paddingLeft10" align="left">
                  <button >Stop</button>
                </div>
              </div>*/}
            </nav>
        </SideNav>
    )
  }
}
