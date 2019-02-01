import React from 'react';
import { SignInForm } from './../SignIn';

class SignInPage extends React.Component {
    constructor(props){
        super(props);
    }




    render(){
        return(
            <div className="signin__container">
                <h1 className="signin__title">Login</h1>
                <div className="signin__border"></div>
                <h1 className="signin__subtitle">
                    Welcome back! Log in to access the CyberDocet.
                </h1>
                <div className="signin__form__container">
                    <SignInForm/>
                </div>
            </div>
        )
    }
}

export default SignInPage;