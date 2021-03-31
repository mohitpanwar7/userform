import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <div>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Personal Details Form In React Js</Navbar.Brand>
        {currentUser ? (
          ""
          // <div className='option' onClick={() => auth.signOut()}>
          //   SIGN OUT
          // </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </Navbar>
    </div >

  </div>

);

export default Header;
