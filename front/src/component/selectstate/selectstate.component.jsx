import React from "react";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './selectstate.styles.css';

class CountryStateSelection extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        const { country, state } = this.props.statedata;
        let India = ["Delhi", "Uttar Pradesh", "Maharastra",
            "Madhya Pradesh", "Rajasthan", "Haryana", "Kerela",
            "Assam", "Sikkim", "Arunachal Pradesh", "Andhra Pradesh",
            "Telengana", "Bihar", "Gujrat", "West bengal", "Goa",
            "Punjab", "Jammu & Kashmir", "Himachal Pradesh",
            "Uttarkhand", "Ladakh", "Jharkhand", "Chhatisgarh"
        ];
        let Usa = [
            "Californea",
            "Utah",
            "Las Vegas",
            "Washington Dc"
        ];

        let Russia = ["Adygey", "Altai", "Bashkortostan",
            "Buryat", "Chechnya", "Chuvash", "Dagestan",
            "Ingushetia", "Kabardino-Balkar", "Kalmykia",
            "Karachay-Cherkess"];

        let type = null;

        let options = null;

        if (country === "India") {
            type = India;
        } else if (country === "Usa") {
            type = Usa;
        } else if (country === "Russia") {
            type = Russia;
        } else if (country === "Other Country") {

        }

        if (type) {
            options = type.map((el) => <option key={el}>{el}</option>);
        }

        return (
            <div className="state-div row mx-0" >
                <Form.Group className="col-md-6">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" onChange={this.props.countryOptionHandler} required>
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
                        {options}
                    </Form.Control>
                </Form.Group>
            </div>
        )
    }
};

export default CountryStateSelection;