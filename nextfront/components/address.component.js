import React from 'react';
import CountryStateSelection from './selectstate.component';
import { FormInput } from './form-input.component';


class AddressComponents extends React.Component {
    render() {
        const {  formErrors } = this.props;
        const { address, city, zipcode } = this.props.formErrors;
        return (
            <div className="row">
                {/* {console.log("handleAddressChange ==>",this.props.handleAddressChange)} */}
                <FormInput className="col-md-8" label="Address" type="text" 
                inputClassName={address.length > 0 ? "error" : ""}
                name="address" errorMessage={formErrors.address.length > 0 && (<span className="errormessage">{formErrors.address}</span>)}
                placeholder="Enter Address" onChange={this.props.handleAddressChange}/>

                <FormInput className="col-md-4" label="City" type="text" name="city" placeholder="Enter City Name"
                inputClassName={city.length > 0 ? "error" : ""} onChange={this.props.handleAddressChange}
                errorMessage={formErrors.city.length > 0 && (<span className="errormessage">{formErrors.city}</span>)}/>
                
                <CountryStateSelection countryOptionHandler={this.props.countryOptionHandler} stateOptionHandler={this.props.stateOptionHandler} statedata={this.props.statedata} className=""/>
                <FormInput className="col-md-4" label="ZipCode" type="text" name="zipcode" placeholder="Enter ZipCode"
                inputClassName={zipcode.length > 0 ? "error" : ""} onChange={this.props.handleAddressChange}
                errorMessage={formErrors.zipcode.length > 0 && (<span className="errormessage">{formErrors.zipcode}</span>)}/>
            </div>
        )
    }
}
export default AddressComponents;