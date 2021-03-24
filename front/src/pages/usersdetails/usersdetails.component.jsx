import React from 'react';
// import { Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
// import { TableHeaderColumn } from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import { Button } from 'react-bootstrap';
import './userdetails.styles.css';
// import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import DeleteButton from "../../component/userdeletebutton/userdeletebutton.component"

class UserTable extends React.Component {

  state = {

    users: [],

    columns: [{
      dataField: 'id',
      text: 'Id',
      filter: textFilter()
    },
    {
      dataField: 'firstname',
      text: 'First Name',
      sort: true,
      filter: textFilter()

    },
    {
      dataField: 'lastname',
      text: 'Last Name',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'dob',
      text: 'Date of Birth',
      sort: true
    },
    {
      dataField: 'mobilenumber',
      text: 'Mobile Number',
      sort: true
    },
    {
      dataField: 'gender',
      text: 'Gender',
      sort: true
    },
    {
      dataField: 'email',
      text: 'Email Id',
      sort: true
    },
    {
      dataField: 'addresslistg',
      text: 'Address',
      sort: true
    },
    {
      dataField: 'id',
      text: 'Action',
      formatter: (value, row, column, rowIndex, columnIndex, id, label, className, ...editorProps) => (
        <div>
          <DeleteButton handleChildState={this.handleChildState} value={value} className="btn btn-sm" label="Delete" />
        </div>
      )

    },
    ]
  }

  componentDidMount() {

    axios.get('http://localhost:5000/users').then(response => {

      console.log(response.data);
      this.setState({
        users: response.data
      });
    });
    console.log(this.state);
  }

  

  // handleDelete = () => {
  //   this.setState({ users: [] });
  //   console.log("user deleted")

  // }
  handleChildState = () => {
    console.log("button pressed")
    this.componentDidMount();
  }

  render() {


    


    return (
      <div className="container">
        <div className="row" className="hdr" style={{ marginTop: 80 }}>
          <div className="col-sm-12 btn btn-info">
            Users Data Table
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <BootstrapTable
            striped
            hover
            keyField='id'
            data={this.state.users}
            columns={this.state.columns}

            filter={filterFactory()} />
        </div>
      </div>
    )
  }
}

export default UserTable;