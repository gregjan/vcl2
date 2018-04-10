import React, { Component } from 'react';

// All from react-sidenav
import { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';

export default class BorderNav extends Component {
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
<Nav id={this.props.navId}>
  <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio} /></NavIcon>
  <NavText><a href="#" style={this.state.color} onClick={this.props.funcTion}>{this.props.navText}</a></NavText>
</Nav>
    )
  }
}
