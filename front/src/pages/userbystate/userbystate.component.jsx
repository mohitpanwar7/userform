import React from "react";
import { DropdownButton, Dropdown, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export class StateSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            states: []
        }
    }
    // componentDidMount() {
    //     fetch(`http://localhost:5000/country/1`)
    //         .then((response) => response.json())
    //         .then(data => {
    //             this.setState({ states: data });
    //         });
    // }
    statefetch = (countryid) => {
        fetch(`http://localhost:5000/country/${countryid}`)
            .then((response) => response.json())
            .then(data => {
                this.setState({ states: data });
            });

    }

    statedown = async (props) => {

        let country = props.target.value
        

        let options = null;

        if (country === "India") {
            // type = India;

            this.statefetch(1);
            console.log("this.state", this.state.states)



        } else if (country === "Usa") {
            this.statefetch(2);

        } else if (country === "Other Country") {

        }

        if (country)  {
            console.log("done")
            options = await this.state.states.map((key) => <option key={key}>{key}</option>);

            await this.setState({ options: options })
            await console.log("options state", options)
        }
        return options
    }

    render() {
        return (
            <div style={{ margin: "350px" }}>
                <div className="state-div row mx-0" >
                    <Form.Group className="col-md-6">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select" onChange={this.statedown} required>
                            <option value=''>---Select Country---</option>
                            <option>India</option>
                            <option>Usa</option>
                            <option>Russia</option>
                            <option>Other Country</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="col-md-6">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" required>
                            <option value="">---Select State---</option>
                            {this.state.options}
                        </Form.Control>
                    </Form.Group>
                    <Button >
                        Search
                    </Button>
                </div>
            </div>
        )
    }
}