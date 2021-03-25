import React from "react";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './selectstate.styles.css';

class CountryStateSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            states: [],
            options: null
        }
    };

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
    //         try {
    //             const response = await fetch(`http://localhost:5000/country/${countryid}`, {
    //                 method: 'GET',

    //             });
    //             this.statelist = await response.json();
    //             return statelist

    //         } catch (error) {
    //             console.error(error);
    //         }

    

    statedown = async (props) => {
        this.props.countryOptionHandler(props)

        const { country, state } = this.props.statedata;

        let options = null;

        if (country === "India") {
            // type = India;

            this.statefetch(1);
            console.log("this.state",this.state.states)
            
            

        } else if (country === "Usa") {
            this.statefetch(2);

        } else if (country === "Other Country") {

        }

        if (country) {
            console.log("done")
            options = await this.state.states.map((key) => <option key={key}>{key}</option>);
            
            this.setState({ options: options })
            console.log("options state", options)
        }
    }



    render() {





        return (
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
                    <Form.Control as="select" onChange={this.props.stateOptionHandler} required>
                        <option value="">---Select State---</option>
                        {this.state.options}
                    </Form.Control>
                </Form.Group>
            </div>
        )
    }
};

export default CountryStateSelection;