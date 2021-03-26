import React from "react";
import { DropdownButton, Dropdown, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export class StateSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            states: [],
            users: null,
            selectedstatename: null,
            selectedstateid : null
        }
    }

    statefetch = (countryid) => {
        fetch(`http://localhost:5000/country/${countryid}`)
            .then((response) => response.json())
            .then(data => {
                this.setState({ states: data });
            });

    }

    statedown(value) {

        console.log("statedown --> ", value)

        if (value === "India") {
            this.statefetch(1);
            console.log("this.state", this.state.states)
        } else if (value === "Usa") {
            this.statefetch(2);
            console.log("this.state", this.state.states)
        } else if (value == "") {
            this.setState({ states: null })
        }
    }
    statedropdown(value) {
        if (value != "") {
            const statedata = value.split(",")
            const statename = statedata[0]
            const stateid = statedata[1]
            fetch(`http://localhost:5000/users/state/${stateid}`)
                .then((response) => response.json())
                .then(data => {
                    this.setState({ users: data });
                });
            this.setState({ selectedstatename: statename })
            this.setState({ selectedstateid: stateid })

        } else {
            this.setState({ selectedstatename: null })
            this.setState({ selectedstateid: null })
        }

    }

    render() {
        return (
            <div style={{ marginTop: "200px" }}>
                <div className="row mx-0" >
                    <Form.Group className="col-md-2">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select" onChange={(e) => this.statedown(e.target.value)} required>
                            <option value="">---Select Country---</option>
                            <option value="India">India</option>
                            <option value="Usa">Usa</option>

                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="col-md-4">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" onChange={(event) => this.statedropdown(event.target.value)} required>
                            <option value="">---Select State---</option>
                            {/* { if (this.state.states != null){
                                this.state.states.map(state => (
                                    <option key={state.id} value={[[state.statename], [state.id]]}>{state.statename}</option>
                                ))}
                        } */}
                            {(this.state.states != null ) ? (this.state.states.map(state => (<option key={state.id} value={[[state.statename], [state.id]]}>{state.statename}</option>))) : ""}

                        </Form.Control>

                    </Form.Group>
                    {console.log("users: ==>", this.state.users)}
                    {(this.state.users != "Users Not Found" && this.state.users != null ) ? (<div><Form.Group className="col-md-6"><Form.Label>Selected State : <span style={{ color: "blue" }}>{this.state.selectedstatename}</span> </Form.Label ><Link to={{ pathname: '/users', stateid:this.state.selectedstateid}} ><Button variant="info" size="sm">Search Users</Button></Link></Form.Group></div>) : ""}

            </div>
            </div >
        )
    }
}