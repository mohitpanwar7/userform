import React from 'react';

import FormInput from './form-input-sign-in-and-sign-out.component';
import { Button, Modal } from 'react-bootstrap';
import CustomButton from './custom-button.component';
import md5 from 'md5';
import styles from '../styles/sign-up.module.scss';

// import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
        super();


        this.state = {
            displayName: '',
            email: '',
            prevPassword: '',
            password: '',
            prevConfirmPassword: '',
            userValid: true,
            show: false,

        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const encpassword = md5(this.state.prevPassword)
        console.log("Enc password===>", encpassword);
        this.setState({ password: encpassword }, () => {
            const { displayName, email, password, prevPassword, prevConfirmPassword } = this.state;

            if (prevPassword != prevConfirmPassword) {
                alert("password dont match");
                return;
            }
            try {
                const data = {
                    displayName: this.state.displayName,
                    email: this.state.email,
                    password: this.state.password,
                }
                fetch('http://127.0.0.1:5000/signup', {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(response => {
                        if (response) {
                            console.log("response==>", response)
                            if (response != `${email} Already Registered`) {
                                this.setState({ userValid: true })
                                this.setState({ show: true })
                            } else {
                                this.setState({ userValid: false })
                                this.setState({ show: true })
                            }

                        }
                    })

            } catch (error) {
                console.log(error);
            }
        })

    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    }
    render() {
        const { displayName, email, prevPassword, prevConfirmPassword } = this.state;
        const handleClose = () => this.setState({ show: false })
        return (
            <div className={styles.signup}>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required />

                    <FormInput
                        type='email'
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />

                    <FormInput
                        type='password'
                        name="prevPassword"
                        value={prevPassword}
                        onChange={this.handleChange}
                        label='Password'
                        required />

                    <FormInput
                        type='password'
                        name="prevConfirmPassword"
                        value={prevConfirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
                <Modal show={this.state.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Report</Modal.Title>
                    </Modal.Header>
                    {(this.state.userValid == true) ? (<Modal.Body>New User :{this.state.displayName} is Created with Email : {this.state.email} </Modal.Body>) : (<Modal.Body>Email : {this.state.email} Is Already Registered.</Modal.Body>)}
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SignUp;