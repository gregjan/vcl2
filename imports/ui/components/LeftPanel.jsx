import React, { Component } from 'react';
import BaseComponent from './BaseComponent.jsx';

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
        <SideNav highlightColor='#FFFFFF' highlightColor='#00bcd4' defaultSelected='labs'>
          <Nav id='labs'>
            <NavIcon>
              <SvgIcon size={20} icon={ic_aspect_ratio} />
            </NavIcon>
            <NavText>
              <a href="#" style={color} onClick={this.getLabList}>Labs</a>
            </NavText>
          </Nav>
          <Nav id='sandbox'>
            <NavIcon>
              <SvgIcon size={20} icon={ic_aspect_ratio}/>
            </NavIcon>
            <NavText>
              <a href="#" style={color} onClick={this.getSandboxList}>Sandbox</a>
            </NavText>
          </Nav>
        </SideNav>
        <div className="paddingTop10"></div>
        <div>
          <BootstrapTable data={this.state.data} striped hover selectRow={selectLab} pagination={true} options={options}>
            <TableHeaderColumn isKey dataField="lab_name">Lab Name</TableHeaderColumn>
            <TableHeaderColumn dataField="instructor">Instructor</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6 paddingLeft10"></div>
</div>);
  }
}
