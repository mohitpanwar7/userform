import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import './header.styles.scss';
import AuthApi from "../../AuthApi";



const Header = ({userauth}) => {
  const auth = React.useContext(AuthApi);
  const newuserauth = userauth;
  const displayname = Cookies.get('displayname');
  const email = Cookies.get('email');
  const ClearCookies = () => {
    Cookies.remove('userid', { path: '' }); 
    Cookies.remove('email', { path: '' }); 
    Cookies.remove('displayname', { path: '' }); 
    Cookies.remove('session', { path: '' }); 
    console.log("userauth=====>",userauth)
    newuserauth()
  };
  return (
    <div className='header'>

      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Personal Details Form In React Js</Navbar.Brand>
        {auth ? (<a className='displayname'>Hello {displayname}</a>) : "" }
        {auth ? (<a className='email'>Email Id : {email}</a>) : "" }
        {auth ? (<Link className='option' onClick={() => ClearCookies()} to='/signin'>SIGN OUT</Link>) : "" }
      </Navbar>


    </div>
  )


};

export default Header;
