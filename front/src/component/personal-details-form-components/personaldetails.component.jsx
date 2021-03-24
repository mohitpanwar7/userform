import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import './personaldetails.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddressBox from '../addressbox/addressbox.component';
import { FormInput } from '../form-components/form.component';
// import $ from 'jquery';
import update from 'react-addons-update';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const mobilenumberRegex = RegExp(/^[0]?[6789]\d{9}$/);

const dobRegex = RegExp(/^\d{4}-\d{1,2}-\d{1,2}$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;


    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });


    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};
var addressboxcount = 0;

const addressArray = {
    id: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipcode: '',
    formErrors: {
        address: '',
        city: '',
        country: '',
        state: '',
        zipcode: ''

    }
}

class PersonalDetailsFormComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            mobilenumber: '',
            email: '',
            dob: '',
            gender: '',
            maritalstatus: '',
            termsandconditions: false,
            show:false,
            formErrors: {
                firstname: '',
                lastname: '',
                mobilenumber: '',
                email: '',
                dob: '',
                gender: '',
                maritalstatus: '',
                termsandconditions: '',

            },
            addressBoxList: [{
                id: '',
                address: '',
                city: '',
                country: '',
                state: '',
                zipcode: '',
                formErrors: {
                    address: '',
                    city: '',
                    country: '',
                    state: '',
                    zipcode: ''
                }
            }
            ],

        }
    };



    handleSubmit = e => {
        e.preventDefault();
        console.log("this.state ==>", this.state)

        if (formValid(this.state)) {

            fetch('http://127.0.0.1:5000/users/create', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(this.state)
            }).then(r => r.json())
                .then(res => {
                    if (res) {
                        this.setState({ show : true })
                        console.log("response==>", res)
                    }
                })

        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };



    handleChange = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstname":
                formErrors.firstname =
                    value.length < 3 ? "Minimum 3 characaters required!" : "";
                break;
            case "lastname":
                formErrors.lastname =
                    value.length < 3 ? "Minimum 3 characaters required!" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "Please Enter a valid Email Id";
                break;
            case "mobilenumber":
                formErrors.mobilenumber = mobilenumberRegex.test(value)
                    ? ""
                    : "Please Enter a Valid 10 Digit Mobile Number";
                break;
            case "dob":
                formErrors.dob = dobRegex.test(value)
                    ? ""
                    : "Please Enter Valid Date Of Birth";
                break;
            case "maritalstatus":
                formErrors.maritalstatus = (value === "")
                    ? "Please Select Marital Status!"
                    : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };




    addaddressbox = () => {

        const val = this.state.addressBoxList;
        addressboxcount += 1;
        val.push(addressArray);
        this.setState({ addressBoxList: val })
        this.setState({ rowlen: val.length })
        console.log("address box count", addressboxcount);
        console.log("address box array", this.state.addressBoxList);
    };



    removeaddressbox = () => {

        const val = this.state.addressBoxList;
        val.splice(-1);
        addressboxcount -= 1;
        this.setState({ addressBoxList: val })
        this.setState({ rowlen: val.length })
        console.log("address box count", addressboxcount);
        console.log("address box array", this.state.addressBoxList);

    };

    handleAddressChange = (e) => {
        // e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "address":
                formErrors.address =
                    value.length < 6 ? "Please Enter Valid Address!" : "";
                break;
            case "city":
                formErrors.city =
                    value.length < 4 ? "Please Enter Valid City!" : "";
                break;
            case "zipcode":
                formErrors.zipcode = (value.length < 4 || value.length > 9 || /[0-9]/.test(value) === false)
                    ? "Please Enter Valid ZipCode!"
                    : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };


    handleChildState = (state, item) => {
        console.log("address state  =>", state);
        console.log("address item  =>", item);
        this.setState(update(this.state, {
            addressBoxList: {
                [item]: {
                    $set: state
                }
            }
        }));
    }

    render() {
        const { formErrors } = this.state;
        const statedata = this.state;
        const handleClose = () => this.setState({ show : false});

        return (
            <div>

                <Form onSubmit={this.handleSubmit} >
                    <div className="form-div row">
                        <FormInput className="col-md-4" inputClassName={formErrors.firstname.length > 0 ? "error" : ""}
                            label="First Name" name="firstname" type="text" placeholder="Enter First Name"
                            errorMessage={formErrors.firstname.length > 0 && (<span className="errormessage">{formErrors.firstname}</span>)} onChange={this.handleChange} />

                        <FormInput className="col-md-4" inputClassName={formErrors.lastname.length > 0 ? "error" : ""}
                            errorMessage={formErrors.lastname.length > 0 && (<span className="errormessage">{formErrors.lastname}</span>)} onChange={this.handleChange}
                            label="Last Name" name="lastname" type="text" placeholder="Enter Last Name" />

                        <FormInput className="col-md-4" inputClassName={formErrors.mobilenumber.length > 0 ? "error" : ""}
                            errorMessage={formErrors.mobilenumber.length > 0 && (<span className="errormessage">{formErrors.mobilenumber}</span>)}
                            onChange={this.handleChange} label="Mobile Number" name="mobilenumber" type="tel" placeholder="Enter Mobile Number" />


                        <FormInput className="col-md-4" inputClassName={formErrors.email.length > 0 ? "error" : ""}
                            errorMessage={formErrors.email.length > 0 && (<span className="errormessage">{formErrors.email}</span>)}
                            label="Email" name="email" type="email" placeholder="Enter Email Id" onChange={this.handleChange} />

                        <FormInput className="col-md-2" label="Date of Birth" name="dob" type="date" placeholder="Date of Birth"
                            inputClassName={formErrors.dob.length > 0 ? "error" : ""} onChange={this.handleChange}
                            errorMessage={formErrors.dob.length > 0 && (<span className="errormessage">{formErrors.dob}</span>)} />
                        <Form.Group className="col-md-2">
                            <Form.Label>Gender</Form.Label>
                            <div>
                                <Form.Check
                                    inline="true"
                                    className="box"
                                    type="radio"
                                    id="male"

                                    name="gender"
                                    value="male"
                                    onChange={this.handleChange}
                                    required />
                                <Form.Label inline="true" htmlFor="male" className="label1" >Male</Form.Label>

                                <Form.Check
                                    inline="true"
                                    id="female"

                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={this.handleChange}
                                    required />
                                <Form.Label inline="true" htmlFor="female" className="label2">Female</Form.Label>
                            </div>
                        </Form.Group>

                        <Form.Group className="col-md-4">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control name="maritalstatus" as="select"
                                className={formErrors.maritalstatus.length > 0 ? "error" : ""} onChange={this.handleChange} required>
                                <option value="">---Select Marital Status---</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </Form.Control>
                            {formErrors.maritalstatus.length > 0 && (<span className="errormessage">{formErrors.maritalstatus}</span>)}
                        </Form.Group>

                        {this.state.addressBoxList.map((key, item) => (

                            <AddressBox key={key} item={item} handleChildState={this.handleChildState.bind(this)} addaddressbox={this.addaddressbox} statedata={statedata} handleAddressChange={() => this.handleAddressChange(item)} removeaddressbox={this.removeaddressbox} rowlength={this.state.rowlen} />

                        ))}

                        <Form.Group>
                            <Form.Check type="checkbox" id="termsandconditions" inline="true" required />
                            <Form.Label htmlFor="termsandconditions" inline="true" name="termsandconditions">Agree to terms & conditions</Form.Label>
                        </Form.Group>
                        <div className="button-div">
                            <Button className="submit-button" type="submit">Submit</Button>
                        </div>
                    </div>
                </Form>
                <Modal show={this.state.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>New User {this.state.firstname} {this.state.lastname} is Created.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
        );
    }
}

export default PersonalDetailsFormComponents;
