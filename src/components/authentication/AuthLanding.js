import React from 'react';
import {  withRouter } from 'react-router-dom';

class AuthLanding extends React.Component{
    constructor(props){
        super(props);
    }

    nextPath(path){
        this.props.history.push(path);
    }


    render(){

        return(
            <div className="authlanding__container">
            <div className="authlanding__container__user">

                <h1 className="authlanding__headertext">
                USER PORTAL 
                </h1>

                <div className="authlanding__button__container">
                
                <button className="authlanding__button"
                onClick={() => this.nextPath('/signup') }>
                Sign Up</button>
               
                </div>

                

                <div className="authlanding__button__container">
                <button className="authlanding__button"
                onClick={() => this.nextPath('/signin') }>
                Sign In</button>
                </div>
                
            </div>

            <div className="authlanding__container__admin">
                <h1 className="authlanding__headertext"
                >ADMIN PORTAL</h1>

                <div className="authlanding__button__container">
                <button 
                className="authlanding__button"
                onClick={() => this.nextPath('/adminsignup') }>
                Sign Up</button>
                </div>
                
                <div className="authlanding__button__container">
                <button 
                className="authlanding__button"
                onClick={() => this.nextPath('/adminsignin') }>
                Sign In</button>
                </div>
                

            </div>

            </div>
            
        )
    }
}

export default withRouter(AuthLanding);