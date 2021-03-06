import React from 'react';
import { Form } from 'react-bootstrap';
// import './form.styles.css';
import styles from '../styles/form.module.css';

export const FormInput = props => {
    const { name, className, inputClassName, label, type, placeholder , onChange, errorMessage, min,max} = props;
    return (
        <Form.Group className={className}>
            <Form.Label>{label}</Form.Label>
            <Form.Control className={inputClassName} type={type} name={name} min={min} max={max} placeholder={placeholder} 
                onChange={onChange} required ></Form.Control>
            <div>{errorMessage}</div>
            {console.log("errormessage ==> ",errorMessage)}
        </Form.Group>
    );
};