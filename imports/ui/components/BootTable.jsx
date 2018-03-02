import React, { Component } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class BootTable extends Component {
  constructor(props) {
    super(props);

    const selectLab = {
      mode: 'radio',
      onSelect: this.handleCreateMachine
    };
    const options = {
      sizePerPageList: [ 5, 10, 15, 20 ],
      sizePerPage: 5,
    };

    this.state = {
      data: []
    }
  }

  handleCreateMachine(row, isSelected, e){
    alert("Hello.")
  }

  render() {
    return(
<BootstrapTable data={this.state.data} striped hover selectRow={this.selectLab} pagination={true} options={this.options}>
  <TableHeaderColumn isKey dataField="lab_name">Lab Name</TableHeaderColumn>
  <TableHeaderColumn dataField="instructor">Instructor</TableHeaderColumn>
</BootstrapTable>
    )
  }
}
