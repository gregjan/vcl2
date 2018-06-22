import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class BootTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        sizePerPageList: [5, 10, 15, 20],
        sizePerPage: 5,
      },
    };
  }

  handleCreateMachine() {
    alert('Hello.');
  }

  render() {
    return (
      <BootstrapTable data={this.props.data} hover keyField="lab_name" options={this.state.options}>
        <TableHeaderColumn datafield="lab_name">Lab Name</TableHeaderColumn>
        <TableHeaderColumn dataField="instructor">Instructor</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

BootTable.propTypes = {
  data: PropTypes.string,
};

BootTable.defaultProps = {
  data: null,
};
