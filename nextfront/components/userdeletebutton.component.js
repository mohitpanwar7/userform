import React from "react";
import { Button } from "react-bootstrap";


const DeleteButton = (props) => {

    
    const { value, label, className , handleChildState, stateid} = props;
    const deleteuser = async () => {
        fetch('/api/users/delete/' + value);
        await handleChildState(stateid);
    }
    

    return (
        <div>
            <Button className={className} onClick={deleteuser}>{label}</Button>
        </div>
    );
};

export default DeleteButton;