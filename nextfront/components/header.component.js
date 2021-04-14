import React from 'react';
import Link  from 'next/link';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import styles from '../styles/header.module.scss';
import AuthApi from "./AuthApi";




const Header = ({userauth,auth}) => {
  // const auth = React.useContext(AuthApi);
  const newuserauth = userauth;
  const firstname = Cookies.get('firstname');
  const lastname = Cookies.get('lastname');
  const email = Cookies.get('email');

  const ClearCookies = () => {
    Cookies.remove('id', { path: '' }); 
    Cookies.remove('email', { path: '' }); 
    Cookies.remove('firstname', { path: '' }); 
    Cookies.remove('lastname', { path: '' }); 
    Cookies.remove('token', { path: '' } )
    
    newuserauth()
  };

  return (
    <div className={styles.header}>

      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="">Personal Details Form In Next Js</Navbar.Brand>
        {auth ? (<a className={styles.displayname}>Hello, {firstname} {lastname}</a>) : "" }
        {auth ? (<a className={styles.email}>Email Id : {email}</a>) : "" }
        {auth ? (<Link  href='/'><a onClick={() => ClearCookies()} className={styles.option} >SIGN OUT</a></Link>) : "" }
      </Navbar>


    </div>
  )


};

export default Header;
