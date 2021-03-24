import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




const DeleteButton = (props) => {

    
    const { value, label, className , handleChildState} = props;
    const deleteuser = () => {
        console.log("inside press")
        handleChildState();
        return fetch('http://localhost:5000/users/delete/' + value);
        
    }
    

    return (
        <div>
            <Button className={className} onClick={deleteuser}>{label}</Button>
        </div>
    );
};

export default DeleteButton;