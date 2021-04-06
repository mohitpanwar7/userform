import React from 'react';
import { Form } from 'react-bootstrap';
// import './form.styles.css';


export const FormInput = props => {
    const { name, className, inputClassName, label, type, placeholder , onChange, errorMessage } = props;
    return (
        <Form.Group className={className}>
            <Form.Label>{label}</Form.Label>
            <Form.Control className={inputClassName} type={type} name={name} placeholder={placeholder} 
                onChange={onChange} required ></Form.Control>
            <div>{errorMessage}</div>
            {console.log("errormessage ==> ",errorMessage)}
        </Form.Group>
    );
};