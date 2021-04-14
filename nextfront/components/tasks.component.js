import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import DatePicker from './datepicker.component';
import { addDays } from 'date-fns';
import MyTimeLine from './mytimeline.component';

class UserTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            comments: null,
            taskstatus: '',
            taskdeadline: null,
            taskassigndate: '',
            selectedstatusid: '',
            selectedstatusname: '',
            selectedstatussequence: '',
            assignedto: null,
            assignedtoid: null,
            data: null,
            show: false,
            task: {},
            tasks: [],
            datepickershow: false,
            taskByStatusId: [],
            userslist: [],
            statusshow: false,
            edittaskshow: false,
            deletestatusshow: false,
            addStatus: {
                statusname: "",
                statussequence: ""
            },
            showallstatusbutton: false,
            deleteStatus: null,
            allStatus: [],
            showtimelinebutton: true,
            component : "mytimeline",
            ranges: {
                startDate: new Date(),
                endDate: addDays(new Date(), -7),
                key: 'selection'
            }
        }
    }


    componentDidMount() {
        fetch(`/api/users`)
            .then((response) => response.json())
            .then(data => {
                this.setState({ userslist: data });
            });
        // fetch(`/api/tasks`)
        //     .then((response) => response.json())
        //     .then(data => {
        //         this.setState({ tasks: data });
        //     });

        fetch(`/api/status/tasks/all`)
            .then((response) => response.json())
            .then(data => {
                this.setState({ allStatus: data });
            });


    }

    handleChange = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    };

    handleStatusChange = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        const tempobj = this.state.addStatus;
        tempobj[name] = value
        this.setState({ addStatus: tempobj }, () => console.log(this.state.addStatus));
    };

    handleEditTaskChange = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        const tempobj = this.state.task;
        tempobj[name] = value
        this.setState({ task: tempobj }, () => console.log(this.state.task));
    };

    handleAddTask = e => {
        e.preventDefault()
        console.log("create called")
        fetch('/api/tasks/create', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then((response) => response.json())
            .then(data => {
                this.setState({ allStatus: data });
            });

        this.setState({ show: false })
    }

    handleDeleteTask = e => {
        fetch(`/api/tasks/delete/${e}`, { method: 'POST' })
            .then((response) => response.json())
            .then(data => {
                this.setState({ allStatus: data });
            });



    }

    handleAddStatus = e => {
        e.preventDefault()
        fetch('/api/tasks/status/create', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(this.state.addStatus)
        }).then(r => r.json())
            .then(res => {
                this.setState({
                    allStatus: res
                })
            })
        this.setState({ statusshow: false }, console.log("this.state==>", this.state))
    }

    handleDeleteStatus = e => {

        e.preventDefault()
        fetch(`/api/tasks/status/delete/${this.state.deleteStatus}`, {
            method: 'POST'

        })
            .then(r => r.json())
            .then(res => {
                this.setState({
                    allStatus: res
                })
            })
        this.setState({ deletestatusshow: false });
    }
    handleUserSelectChange = (e) => {
        const { value } = e.target;
        var valuearray = value.split(",")
        console.log("valuearray==>", valuearray)
        var assignedto = valuearray[0]
        var assignedtoid = parseInt(valuearray[1])
        this.setState({ assignedto: assignedto, assignedtoid: assignedtoid }, () => console.log(this.state));
    }

    // countTask = (id) => {
    //     var count = 0;
    //     var taskcount = this.state.tasks.filter(task => task.statusid == id)
    //     count = taskcount.length;
    //     return (
    //         <div>({count})</div>
    //     )
    // }

    handleEditUserSelectChange = (e) => {
        const { value } = e.target;
        var valuearray = value.split(",")
        console.log("valuearray==>", valuearray)
        var assignedto = valuearray[0]
        var assignedtoid = parseInt(valuearray[1])
        const tempobj = this.state.task;
        tempobj["assignedtoid"] = assignedtoid
        this.setState({ task: tempobj }, () => console.log(this.state.task));
    }

    getDate = (datedata) => {
        if (datedata != null) {
            var date = new Date(datedata);
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            (day.length == 1) && (day = '0' + day);
            (month.length == 1) && (month = '0' + month);
            var yyyymmdd = year + '-' + month + '-' + day;
            return yyyymmdd
        } else {
            return null
        }
    }

    handleEditTask = (task, statusname, statussequence) => {
        console.log("task", task)
        this.setState({ edittaskshow: true, task: task, selectedstatusname: statusname, selectedstatussequence: statussequence })

    }

    handleEditTaskSubmit = e => {
        e.preventDefault()
        console.log("submit called")
        fetch('/api/tasks/edit', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(this.state.task)
        }).then((response) => response.json())
            .then(data => {
                this.setState({ allStatus: data });
            });

        this.setState({ edittaskshow: false })
    }
    handleChildState = (ranges) => {
        console.log("ranges", ranges)
        this.setState({ ranges: ranges });
    }

    getStatusDatafromDatePicker = () => {
        fetch('/api/status/tasks/between',
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(this.state.ranges)
            }).then((response) => response.json())
            .then(data => {
                this.setState({ allStatus: data });
            });
        this.setState({ datepickershow: false })
        this.setState({ showallstatusbutton: true })
    }
    showAllStatus = () => {
        fetch(`/api/status/tasks/all`)
            .then((response) => response.json())
            .then(data => {
                this.setState({ allStatus: data });
            });
        this.setState({ showallstatusbutton: false })
    }






    render() {
        const handleClose = () => this.setState({ show: false });
        const handleEditTaskClose = () => this.setState({ edittaskshow: false });
        const handleAddStatusClose = () => this.setState({ statusshow: false });
        const handleDeleteStatusClose = () => this.setState({ deletestatusshow: false });
        console.log("allStatus ===>", this.state.allStatus)

        return (
            <div >
                <div style={{ textAlign: 'right' }}>
                    {this.state.showtimelinebutton ? (<Button variant="warning" onClick={() => { this.setState({ showtimelinebutton: false, component:"assigntask" }) }} style={{ marginTop: '15px', marginBottom: '15px', marginRight: '20px' }}>Assign Tasks</Button>) : (<Button variant="warning" onClick={() => { this.setState({ showtimelinebutton: true, component:"mytimeline" }) }} style={{ marginTop: '15px', marginBottom: '15px', marginRight: '20px' }}>My Timeline</Button>)}
                    {this.state.showallstatusbutton ? (<Button variant="warning" onClick={this.showAllStatus} style={{ marginTop: '15px', marginBottom: '15px', marginRight: '20px' }}>Show All Status </Button>) : ""}
                    {this.state.datepickershow ? (<Button variant="info" onClick={() => { this.setState({ datepickershow: false,component:"assigntask" }) }} style={{ marginTop: '15px', marginBottom: '15px', marginRight: '20px' }}>Show Tasks</Button>) : (<Button variant="info" onClick={() => { this.setState({ datepickershow: true, component:"datepicker" }) }} style={{ marginTop: '15px', marginBottom: '15px', marginRight: '20px' }}>Assign Task Filter</Button>)}
                    <Button variant="success" onClick={() => { this.setState({ statusshow: true }) }} style={{ marginTop: '15px', marginBottom: '15px', marginRight: '20px' }}> Add Status Type </Button>
                    {this.state.allStatus.length > 0 ? (<Button variant="danger" onClick={() => { this.setState({ deletestatusshow: true }) }} style={{ marginTop: '15px', marginBottom: '15px', marginRight: '20px' }}> Delete Status Type </Button>) : ""}
                </div>
                {(() => {
                    if (this.state.component == "assigntask") {
                        return (<div className="row mx-3">
                            {this.state.allStatus.map((status) => {
                                return (
                                    <div className="col-md-3 " >
                                        <div style={{ textAlign: 'center' }}><h3>{status.statusname} ({status.taskcount}) </h3></div>
                                        <div className="card" style={{ backgroundColor: '#b3b3b3', color: '#e6e6e6' }}>
                                            <Button style={{ marginLeft: '-24px', marginRight: '-24px', marginTop: '-24px', borderRadius: '10px' }} onClick={() => { this.setState({ show: true, selectedstatusid: status.id, selectedstatusname: status.statusname, selectedstatussequence: status.statussequence }) }} > Add Task </Button>

                                            {status.alltasks.map((task) => {

                                                return (
                                                    <div className="bg-info card">
                                                        <div style={{ textAlign: 'right', position: 'absolute', right: '10px', top: '8px' }}><Button variant="transparent" onClick={() => this.handleDeleteTask(task.id)}>X</Button></div>
                                                        <div style={{ textAlign: 'right', position: 'absolute', right: '40px', top: '7px' }}><Button variant="transparent" onClick={() => this.handleEditTask(task, status.statusname, status.statussequence)}><img src='/pencil.svg' alt='editicon' height="14px" weight="14px" /></Button></div>
                                                        <ul style={{ listStyle: 'none', padding: '0px' }}>
                                                            <li>Id:{task.id} </li>
                                                            <li>Title:{task.title}</li>
                                                            <li>Comments: {task.comments}</li>
                                                            <li>Assigned To: {task.firstname} {task.lastname}</li>
                                                            {task.taskassigndate ? (<li>Assigned Date: {this.getDate(task.taskassigndate)} </li>) : ""}
                                                            {task.taskdeadline ? (<li>Task Deadline: {this.getDate(task.taskdeadline)} </li>) : ''}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>)
                            })}

                        </div>)
                    } else if (this.state.component == "datepicker") {
                        return (
                            <div>
                                <DatePicker ranges={this.state.ranges} handleChildState={this.handleChildState.bind(this)} /> <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                    <Button variant="warning" size="xl" onClick={this.getStatusDatafromDatePicker}> Show Tasks From Selected Dates</Button>
                                </div>
                            </div>
                        )
                    } else if (this.state.component == "mytimeline") {
                        return (
                            <div>
                                <MyTimeLine statuslist={this.state.allStatus}/>
                            </div>
                        )
                    } 
                })()}
                <div>
                    <Modal show={this.state.deletestatusshow} onHide={handleDeleteStatusClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Status Type</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={(e) => this.handleDeleteStatus(e)}>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Status :</Form.Label>
                                    <Form.Control as="select" onChange={(e) => this.handleChange(e)} name="deleteStatus" required>
                                        <option value="">---Select Status---</option>
                                        {this.state.allStatus.map(status => (
                                            <option key={status.id} value={status.id}> {status.statusname} , Sequence : {status.statussequence} </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="info" className="submit-button" type="submit">
                                        Delete Status
                                     </Button>
                                    <Button variant="danger" onClick={handleDeleteStatusClose}>
                                        Cancel
                                     </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>

                    </Modal>

                    <Modal show={this.state.statusshow} onHide={handleAddStatusClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Status Type</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={(e) => this.handleAddStatus(e)}>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Status Name</Form.Label>
                                    <Form.Control type="input" name="statusname" onChange={this.handleStatusChange} placeholder="Enter Status Name" required></Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Status Sequence</Form.Label>
                                    <Form.Control type="number" min="1" name="statussequence" onChange={this.handleStatusChange} required></Form.Control>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="success" className="submit-button" type="submit">
                                        Add Status
                                     </Button>
                                    <Button variant="danger" onClick={handleAddStatusClose}>
                                        Cancel
                                     </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>

                    </Modal>

                    <Modal show={this.state.show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.handleAddTask}>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="input" name="title" onChange={this.handleChange} placeholder="Enter Task Title" required ></Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control type="input" name="comments" onChange={this.handleChange} placeholder="Enter Comments" ></Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-12">
                                    <Form.Label>Task Status</Form.Label>
                                    <Form.Control as="select" name="selectedstatusid" onChange={this.handleChange} required>

                                        <option value={this.state.selectedstatusid}>{this.state.selectedstatusname} , Sequence : {this.state.selectedstatussequence} </option>
                                        {this.state.allStatus.map(status => {
                                            if (status.id != this.state.selectedstatusid) {
                                                return (<option key={status.id} value={status.id}> {status.statusname} , Sequence : {status.statussequence} </option>)
                                            }
                                        })}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Assigned To :</Form.Label>
                                    <Form.Control as="select" name="assignedto" onChange={this.handleUserSelectChange} required>
                                        <option value="">---Select User---</option>
                                        {this.state.userslist.map(user => (
                                            <option key={user.id} value={[[`${user.firstname} ${user.lastname}`], [user.id]]}>{user.firstname} {user.lastname} Id: {user.id}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Task Assign Date</Form.Label>
                                    <Form.Control type="date" min="2020-01-01" max="2025-12-31" name="taskassigndate" onChange={this.handleChange} required ></Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Task Deadline</Form.Label>
                                    <Form.Control type="date" min="2020-01-01" max="2025-12-31" name="taskdeadline" onChange={this.handleChange}></Form.Control>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="success" className="submit-button" type="submit">
                                        Add Task
                                     </Button>
                                    <Button variant="danger" onClick={handleClose}>
                                        Cancel
                                     </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>

                    </Modal>

                    <Modal show={this.state.edittaskshow} onHide={handleEditTaskClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Task (Id: {this.state.task.id})</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.handleEditTaskSubmit}>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="input" name="title" defaultValue={this.state.task.title} onChange={this.handleEditTaskChange} placeholder="Enter Task Title" required ></Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control type="input" name="comments" defaultValue={this.state.task.comments} onChange={this.handleEditTaskChange} placeholder="Enter Comments" ></Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-12">
                                    <Form.Label>Task Status</Form.Label>
                                    <Form.Control as="select" name="statusid" defaultValue={this.state.task.statusid} onChange={this.handleEditTaskChange} required>

                                        <option value={this.state.task.statusid}>{this.state.selectedstatusname} , Sequence : {this.state.selectedstatussequence} </option>
                                        {this.state.allStatus.map(status => {
                                            if (status.id != this.state.task.statusid) {
                                                return (<option key={status.id} value={status.id}> {status.statusname} , Sequence : {status.statussequence} </option>)
                                            }
                                        })}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Assigned To :</Form.Label>
                                    <Form.Control as="select" name="assignedto" defaultValue={[[`${this.state.task.firstname} ${this.state.task.lastname}`], [this.state.task.assignedtoid]]} onChange={this.handleEditUserSelectChange} required>
                                        <option value="">---Select User---</option>
                                        {this.state.userslist.map(user => (
                                            <option key={user.id} value={[[`${user.firstname} ${user.lastname}`], [user.id]]}>{user.firstname} {user.lastname} Id: {user.id}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Task Assign Date</Form.Label>
                                    <Form.Control type="date" min="2020-01-01" max="2025-12-31" name="taskassigndate" defaultValue={this.getDate(this.state.task.taskassigndate)} onChange={this.handleEditTaskChange} required ></Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Task Deadline</Form.Label>
                                    <Form.Control type="date" min="2020-01-01" max="2025-12-31" name="taskdeadline" defaultValue={this.getDate(this.state.task.taskdeadline)} onChange={this.handleEditTaskChange}></Form.Control>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="success" className="submit-button" type="submit">
                                        Add Task
                                     </Button>
                                    <Button variant="danger" onClick={handleEditTaskClose}>
                                        Cancel
                                     </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>

                    </Modal>

                </div>
            </div>
        )
    }

};

export default UserTasks;