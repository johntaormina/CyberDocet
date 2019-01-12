import React from 'react';
import {NavLink} from "react-router-dom";
import SignOutButton from './authentication/SignOut.js';
import * as ROUTES from './../routers/routes.js';
import { AuthUserContext } from './session/'

const Header = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <HeaderAuth/> : <HeaderNotAuth/>
            }
        </AuthUserContext.Consumer>
    </div>
    
);

const HeaderAuth = () => (
    <header>

    <div className = "header">

    <div className="header--left">
    <NavLink to={ROUTES.LANDING}>
    <button className="header__button">
    CyberDocet
    </button></NavLink>
    </div>
    
    <div className="header--right">
    <NavLink to={ROUTES.COURSES}>
    <button className="header__button">
    Courses
    </button></NavLink>

    <NavLink to={ROUTES.ABOUT}>
    <button className="header__button">
    About
    </button></NavLink>

    <SignOutButton/>

    </div>
        
    </div>  
    </header>   
);

const HeaderNotAuth = (props) => (
    <header>

    <div className = "header">

    <div className="header--left">
    <NavLink to={ROUTES.LANDING}>
    <button className="header__button">
    CyberDocet
    </button></NavLink>
    </div>
    
    <div className="header--right">
    

    <NavLink to={ROUTES.SIGN_IN}>
    <button className="header__button">
    SignIn
    </button></NavLink>

    </div>
        
    </div>  
    </header>   
);

export default Header;