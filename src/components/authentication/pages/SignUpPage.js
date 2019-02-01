import React from 'react';
import { SlideDown } from 'react-slidedown';
import { AdminSignUpForm } from './../admin/AdminSignUp';
import { SignUpForm } from './../SignUp';

import 'react-slidedown/lib/slidedown.css';

class SignUpPage extends React.Component {
    constructor(props){
        super(props);

        this.adminClick = this.adminClick.bind(this);
        this.userClick = this.userClick.bind(this);
        this.state = {
            admin: false,
            user: false
        }
    }

    userClick() {
        if(this.state.admin){
            this.setState({admin: false});
            setTimeout(function() { 
                this.setState({
                    user: !this.state.user
                }) 
            }.bind(this), 500)
        } 
        else {
            setTimeout(function() { 
                this.setState({
                    user: !this.state.user
                }) 
            }.bind(this), 100)
        }  
    }

    adminClick(){
        if(this.state.user){
            this.setState({user: false});
            setTimeout(function() { 
                this.setState({
                    admin: !this.state.admin
                }) 
            }.bind(this), 500)
        } 
        else {
            setTimeout(function() { 
                this.setState({
                    admin: !this.state.admin
                }) 
            }.bind(this), 100)
        }  
    }

    render(){
        console.log(this.state)
        return(
            <div className="signup__container">
                <h1 className="signup__title">Welcome!</h1>
                <div className="signup__border"></div>
                <h1 className="signup__subtitle">
                    Lets get started! Are you an 

                    <button 
                    className="signup__select__button"
                    onClick={this.adminClick}
                    >
                    Admin
                    </button>

                     or a 
                     <button 
                     className="signup__select__button"
                     onClick={this.userClick}
                     >
                    User
                    </button>
                     ?
                </h1>

                <div>
                    <SlideDown className="my-dropdown-slideshow">
                    {this.state.admin ? 

                    <div className="signup__form__container">
                        <AdminSignUpForm/>
                    </div>

                    :
                    <div></div>}
                    {this.state.user ? 

                    <div className="signup__form__container">
                        <SignUpForm/>
                    </div>

                    :
                    <div></div>}
                    </SlideDown>
                    
                </div>
                                  
            </div>
        )
    }
}

export default SignUpPage;