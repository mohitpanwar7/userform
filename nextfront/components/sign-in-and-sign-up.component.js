import React from 'react';
import SignIn from './sign-in.component';
// import './sign-in-and-sign-up.styles.scss';
import SignUp from './sign-up.component';

import styles from '../styles/sign-in-and-sign-up.module.scss';


const SignInAndSignUpPage = ({userauth}) => (
    <div className={styles.signinandsignup}>
        <SignIn userauth={userauth}/>
        <SignUp/>
    </div>
);
export default SignInAndSignUpPage;