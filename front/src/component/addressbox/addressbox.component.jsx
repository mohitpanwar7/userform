import React from 'react';
import { Button } from 'react-bootstrap';
import './addressbox.styles.css';
import AddressComponents from '../address/address.component';
import 'bootstrap/dist/css/bootstrap.min.css';



class AddressBox extends React.Component {
  constructor(props) {
    super(props);
    const item = this.props.item;
    this.state = this.props.statedata.addressBoxList[item];

  }


  countryOptionHandler = (event) => {
    const item = this.props.item;
    this.setState({ country: event.target.value }, () => { this.handleChildState(this.state,item) });

  };

  stateOptionHandler = (event) => {
    const item = this.props.item;
    this.setState({ state: event.target.value }, () => { this.handleChildState(this.state,item) });

  };

  
  handleAddressChange = (e) => {
    
    e.preventDefault();
    const { name, value } = e.target;
    const item = this.props.item;
    this.setState({ id : item });
    this.setState({ [name]: value }, () => { this.handleChildState(this.state,item) });
    let formErrors = this.props.statedata.addressBoxList[this.props.item].formErrors;
    
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
    this.setState({ formErrors, [name]: value }, () => console.log("this.state", this.state));
  };


  handleChildState = (state,item) => {
    return this.props.handleChildState(state,item);
  }

  render() {
    return (
      <div className="address-div">
        <fieldset>
          <legend>
            <Button variant="success" onClick={this.props.addaddressbox} className="button">+</Button>
            {this.props.rowlength - 1 ? <Button variant="danger" onClick={this.props.removeaddressbox} className="button">-</Button> : ""}
          </legend>

          <AddressComponents countryOptionHandler={this.countryOptionHandler} stateOptionHandler={this.stateOptionHandler} statedata={this.state} formErrors={this.state.formErrors} handleAddressChange={this.handleAddressChange} />

        </fieldset>
      </div>
    )
  }
}

export default AddressBox;