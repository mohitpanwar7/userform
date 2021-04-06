import React from 'react';
import SignIn from '../../component/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss';
import SignUp from '../../component/sign-up/sign-up.component';
const SignInAndSignUpPage = ({userauth}) => (
    <div className="sign-in-and-sign-up">
        <SignIn userauth={userauth}/>
        <SignUp/>
    </div>
);
export default SignInAndSignUpPage;