import React from 'react';
// import { useLocation } from "react-router-dom";
// import { Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
// import { TableHeaderColumn } from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import { Button } from 'react-bootstrap';
import './userdetails.styles.css';
// import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import DeleteButton from "../../component/userdeletebutton/userdeletebutton.component";
import AddressData from "../../component/useraddresscolumn/useraddresscolumn.component";
import UserImage from "../../component/userimage/userimage.component";

class UserTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedstateid: "",
      users: [],

      columns: [{
        dataField: 'id',
        text: 'Id',
        filter: textFilter()
      },
      {
        dataField: 'id',
        text: 'Image',
        sort: true,
        formatter : (value) => (
          <div>
            <UserImage value={value}/>
          </div>
        )
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
        dataField: 'id',
        text: 'Address',
        sort: true,
        formatter : (value) => (
          <div>
            <AddressData value={value}/>
          </div>
        )
      },
      {
        dataField: 'id',
        text: 'Action',
        formatter: (value, row, column, rowIndex, columnIndex, id, label, className, ...editorProps) => (
          <div>
            <DeleteButton stateid={this.state.selectedstateid} handleChildState={this.handleChildState} value={value} className="btn btn-sm" label="Delete" />
          </div>
        )

      },
      ]
    }
  }
  stateid = this.props.location.stateid; 
  componentDidMount(props) {
    fetch(`http://localhost:5000/users/state/${this.stateid}`)
      .then((response) => response.json())
      .then(data => {
        this.setState({ users: data });
      });
    
    this.setState({ selectedstateid: this.stateid })
    console.log("users in userdetails table", this.stateid);
  }
  
  


  handleChildState = async (stateid) => {
    console.log("child state",stateid)
    let response = await fetch(`http://localhost:5000/users/state/${stateid}`);
    let data = await response.json();
    
    console.log("response ==>",data)
    this.setState({ users : data })
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