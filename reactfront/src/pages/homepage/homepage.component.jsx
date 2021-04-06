import React from 'react';

import './homepage.styles.scss';
// import { Header } from '../../component/header/header.component';
import PersonalDetailsFormComponents from '../../component/personal-details-form-components/personaldetails.component'

const HomePage = ({userauth,auth}) => (
  <div className='homepage'>
    <PersonalDetailsFormComponents userauth={userauth} auth={auth}/>
  </div> 
);

export default HomePage;