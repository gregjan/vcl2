import React, { Component } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class BootTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        lab_name: "test",
        instructor: "dnapier"
      }],
      options: {
        sizePerPageList: [ 5, 10, 15, 20 ],
        sizePerPage: 5
      }
    }
  }

  handleCreateMachine(row, isSelected, e){
    alert("Hello.")
  }

  render() {
    const data = this.state.data;
    const options = this.state.options;

    return(
<BootstrapTable data={data} hover={true} keyField='lab_name' options={options}>
  <TableHeaderColumn datafield="lab_name">Lab Name</TableHeaderColumn>
  <TableHeaderColumn dataField="instructor">Instructor</TableHeaderColumn>
</BootstrapTable>
    )
  }
}
