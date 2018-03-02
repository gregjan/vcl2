import React, { Component } from 'react';

// All from react-sidenav
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';

export default class LeftNav extends Component {
  constructor(props) {
    super(props);

    const color = {
      color: 'white'
    };
  }

  render() {
    return(
<SideNav highlightColor='#FFFFFF' highlightColor='#00bcd4' defaultSelected='labs'>
  <Nav id='labs'>
    <NavIcon>
      <SvgIcon size={20} icon={ic_aspect_ratio} />
    </NavIcon>
    <NavText>
      <a href="#" style={this.color} onClick={function(){}}>Labs</a>
    </NavText>
  </Nav>
  <Nav id='sandbox'>
    <NavIcon>
      <SvgIcon size={20} icon={ic_aspect_ratio}/>
    </NavIcon>
    <NavText>
      <a href="#" style={this.color} onClick={function(){}}>Sandbox</a>
    </NavText>
  </Nav>
</SideNav>
    )
  }
}
