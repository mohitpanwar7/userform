import React from 'react';
import Cookies from 'js-cookie';
import { Table } from 'react-bootstrap';


class MyTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null,
      id: null,
      tasks: null,
      status: this.props.statuslist
    }
  }
  userauth = () => {

    var token = Cookies.get("token")
    if (token != undefined) {
      console.log("token======>", token)
      fetch('/api/userauth',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(token)
        })
        .then(response => response.json())
        .then(response => {
          console.log("token response===>", response)
          if (response.message != "Token is invalid!") {
            console.log("userauthresponse===>", response)
            Cookies.set("id", response.id);
            Cookies.set("email", response.email);
            Cookies.set("firstname", response.firstname);
            Cookies.set("lastname", response.lastname);
            this.setState({ id: response.id }, () => { this.fetchTaskforId() })
          } else {

            Cookies.remove("id", { path: '' });
            Cookies.remove("email", { path: '' });
            Cookies.remove("firstname", { path: '' });
            Cookies.remove("lastname", { path: '' });
            Cookies.remove("token", { path: '' });
            this.setState({ auth: false });
          }

        })
      const id = Cookies.get("id")
      console.log("cookiesid", id);
      if (id != null) {
        this.setState({ auth: true })
      } else {
        this.setState({ auth: false })
      }
    } else {
      this.setState({ auth: false })
    }
  }



  fetchTaskforId = () => {
    fetch(`api/status/tasks/mytimeline`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then((response) => response.json())
      .then(data => {
        this.setState({ tasks: data }, () => { console.log("this.state", this.state) });
      });
  }

  componentDidMount() {
    this.userauth();

  }

  TableData = () => {
    console.log("tablecalled")
    console.log("this.state", this.state)
    console.log("this.state.status", this.props.statuslist)
    if (this.state.tasks != null) {
      return (
        <div className="mx-3">
          <Table responsive stripped hover bordered>
            <thead>
              <tr>
                <th>Task Id</th>
                <th>Tilte</th>
                <th>Comments</th>
                <th>Status Id</th>
                <th>Status Name</th>
                <th>Task Assign Date</th>
                <th>Task Deadline</th>
              </tr>
            </thead>
            <tbody>

              {this.state.tasks.yesterdaytasks ?
                (
                  <>
                    <thead>
                      <tr>
                        <td colSpan="7" style={{ textAlign: "center" }}>
                          Yesterday Tasks
                        </td>
                      </tr>
                    </thead>
                    

                    {this.state.tasks.yesterdaytasks.map((task) => (
                      <tr>

                        <td key={task.id}>{task.id}</td>
                        <td key={task.id}>{task.title}</td>
                        <td key={task.id}>{task.comments}</td>
                        <td key={task.id}>{task.statusid}</td>
                        <td key={task.id}>{task.statusname}</td>

                        <td key={task.id}>{task.taskassigndate}</td>
                        <td key={task.id}>{task.taskdeadline}</td>


                      </tr>
                    ))}

                  </>
                ) : ""
              }

              {this.state.tasks.todaytasks ?
                (
                  <>
                    <thead >
                      <tr >
                        <td colSpan="7" style={{ textAlign: "center" }}>
                          Today Tasks
                        </td>

                      </tr>
                    </thead>
                    {this.state.tasks.todaytasks.map((task) => (
                      <tr>

                        <td key={task.id}>{task.id}</td>
                        <td key={task.id}>{task.title}</td>
                        <td key={task.id}>{task.comments}</td>
                        <td key={task.id}>{task.statusid}</td>
                        <td key={task.id}>{task.statusname}</td>
                        <td key={task.id}>{task.taskassigndate}</td>
                        <td key={task.id}>{task.taskdeadline}</td>


                      </tr>
                    ))}
                  </>
                ) : ""
              }
              {this.state.tasks.tommorrowtasks ?
                (<>
                  <thead>
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center" }}>
                        Tommorrow Tasks
                        </td>

                    </tr>
                  </thead>
                  {
                    this.state.tasks.tommorrowtasks.map((task) => (
                      <tr>

                        <td key={task.id}>{task.id}</td>
                        <td key={task.id}>{task.title}</td>
                        <td key={task.id}>{task.comments}</td>
                        <td key={task.id}>{task.statusid}</td>
                        <td key={task.id}>{task.statusname}</td>
                        <td key={task.id}>{task.taskassigndate}</td>
                        <td key={task.id}>{task.taskdeadline}</td>


                      </tr>
                    ))
                  }

                </>) : ""
              }



            </tbody>





          </Table>
        </div >
      )

    } else {
      return (
        <>
          {this.state.auth ? (<div style={{ textAlign: 'center' }}>
            <h2>No Tasks Found For User</h2>
          </div>) : (<div style={{ textAlign: 'center' }}>
            <h2>User Login Timeout! Please Login Again</h2>
          </div>)}
        </>
      )
    }
  }

  render() {
    return (
      <div>
        {this.TableData()}
      </div >
    )
  }
}

export default MyTimeLine;