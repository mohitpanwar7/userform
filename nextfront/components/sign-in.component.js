import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormInput from './form-input-sign-in-and-sign-out.component';
import CustomButton from './custom-button.component';
import md5 from 'md5';
import Cookies from "js-cookie";
// import './sign-in.styles.scss';
import AuthApi from "./AuthApi";
import styles from '../styles/sign-in.module.scss'



class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      encPassword: '',
      userValid: false,
      show: false
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    const encpassword = md5(this.state.password)
    console.log("Enc password===>", encpassword);
    this.setState({ encPassword: encpassword }, () => {
      try {
        const data = {
          email: this.state.email.toLowerCase(),
          password: this.state.encPassword,
        }
        fetch('/api/signin', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(response => {
            if (response.status != 401 && response.status != 404) {
              console.log("response==>", response)
              Cookies.set('id', response.id);
              Cookies.set('email', response.email);
              Cookies.set('firstname', response.firstname );
              Cookies.set('lastname', response.lastname );
              Cookies.set('token', response.token);
              
              this.setState({ userValid: true, show: true })
              this.props.userauth();

            } else {
              this.setState({ userValid: false, show: true })
            }
          })

      } catch (error) {
        console.log(error);
      }
    })
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const handleClose = () => this.setState({ show: false })
    return (
      <div className={styles.signin}>
        <h2 >I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className={styles.buttons}>
            <CustomButton type='submit'> Sign in </CustomButton>

          </div>
        </form>
        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Report</Modal.Title>
          </Modal.Header>
          {(this.state.userValid == true) ? (<Modal.Body>User with Email: {this.state.email} is logging In.</Modal.Body>) : (<Modal.Body>User with Email : {this.state.email} Not Found .</Modal.Body>)}
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


export default SignIn;
