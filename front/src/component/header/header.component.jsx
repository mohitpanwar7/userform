import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Personal Details Form In React Js</Navbar.Brand>
            </Navbar>
        </div >
    )
};

export default Header;