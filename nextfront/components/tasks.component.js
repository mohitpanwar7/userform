import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


class UserTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            comments: null,
            assignedto: null,
            data: null,
            show: false,
            tasks: null,
            userslist: [],
            status: ""
        }
    }

    AddTask = () => {

    }
    componentDidMount() {
        fetch(`http://localhost:5000/users`)
            .then((response) => response.json())
            .then(data => {
                this.setState({ userslist: data });
            });
    }

    handleChange = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    };

    handleAddTask = e => {
        e.preventDefault()
        fetch('http://127.0.0.1:5000/tasks/create', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then(r => r.json())
            .then(res => { console.log("response", res) })

    }


    render() {
        const handleClose = () => this.setState({ show: false });
        return (
            <div >
                <div className="row mx-3" style={{ backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }} >
                    <div className="col-md-3 " >
                        <div style={{ textAlign: 'center' }}><h3>OPEN TASKS</h3></div>
                        <div className="bg-success card" >
                            <Button style={{ marginLeft: '-24px', marginRight: '-24px', marginTop: '-24px', borderRadius: '10px' }} onClick={() => { this.setState({ show: true, status: "Open" }) }} > Add Task </Button>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                        </div>
                    </div>

                    <div className="col-md-3 ">
                        <div style={{ textAlign: 'center' }}><h3>IN PROGRESS</h3></div>
                        <div className="bg-info card">
                            <Button style={{ marginLeft: '-24px', marginRight: '-24px', marginTop: '-24px', borderRadius: '10px' }} onClick={() => { this.setState({ show: true, status: "In Progress" }) }}> Add Task </Button>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div></div>

                    </div>

                    <div className="col-md-3 ">
                        <div style={{ textAlign: 'center' }}><h3>RECIEVED</h3></div>
                        <div className="bg-secondary card">
                            <Button style={{ marginLeft: '-24px', marginRight: '-24px', marginTop: '-24px', borderRadius: '10px' }} onClick={() => { this.setState({ show: true, status: "Recieved" }) }}> Add Task </Button>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div></div>
                    </div>

                    <div className="col-md-3">
                        <div style={{ textAlign: 'center' }}><h3>CLOSED</h3></div>
                        <div className="bg-warning card">
                            <Button style={{ marginLeft: '-24px', marginRight: '-24px', marginTop: '-24px', borderRadius: '10px' }} onClick={() => { this.setState({ show: true, status: "Closed" }) }}> Add Task </Button>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                            <div className="bg-info card">hello</div>
                        </div>
                    </div>
                </div>
                <div>

                    <Modal show={this.state.show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Task</Modal.Title>
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
                                    <Form.Label>Task Progress</Form.Label>
                                    <Form.Control type="input" value={this.state.status} readOnly></Form.Control>
                                </Form.Group>
                                <Form.Group className="col-md-12">
                                    <Form.Label>Assigned To :</Form.Label>
                                    <Form.Control as="select" name="assignedto" onChange={this.handleChange} required>
                                        <option value="">---Select User---</option>
                                        {this.state.userslist.map(user => (
                                            <option key={user.id} value={user.firstname}>{user.firstname} {user.lastname} Id: {user.id}</option>
                                        ))}
                                    </Form.Control>
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

                </div>
            </div>
        )
    }

};

export default UserTasks;