import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




const DeleteButton = (props) => {

    
    const { value, label, className , handleChildState, stateid} = props;
    const deleteuser = async () => {
        fetch('http://localhost:5000/users/delete/' + value);
        await handleChildState(stateid);
    }
    

    return (
        <div>
            <Button className={className} onClick={deleteuser}>{label}</Button>
        </div>
    );
};

export default DeleteButton;