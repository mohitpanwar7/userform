import React from 'react';

// import './homepage.styles.scss';
// import { Header } from '../../component/header/header.component';
import PersonalDetailsFormComponents from './personaldetails.component';
import styles from '../styles/homepage.module.css';

const HomePage = ({userauth,auth}) => (
  <div className={styles.homepage}>
    <PersonalDetailsFormComponents userauth={userauth} auth={auth}/>
  </div> 
);

export default HomePage;