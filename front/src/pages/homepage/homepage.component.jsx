import React from 'react';

import './homepage.styles.scss';
// import { Header } from '../../component/header/header.component';
import PersonalDetailsFormComponents from '../../component/personal-details-form-components/personaldetails.component'

const HomePage = () => (
  <div className='homepage'>
    <PersonalDetailsFormComponents />
  </div> 
);

export default HomePage;