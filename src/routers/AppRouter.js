import React, { Component } from 'react';
import CyberApp from '../components/CyberApp.js';
import About from '../components/About.js';
import Courses from '../components/Courses.js';
import Header from '../components/Header.js'
import Landing from '../components/Landing.js';
import SignIn from '../components/authentication/SignIn.js';
import SignUp from '../components/authentication/SignUp.js';
import Admin from '../components/Admin.js';
import Course from '../components/Course/Course.js';
import NotFound from '../components/NotFound.js';

import * as ROUTES from './routes.js';

import { BrowserRouter, Route, Switch, Router, NavLink } from 'react-router-dom';
import { withFirebase } from '../components/firebase/context.js'
import { AuthUserContext } from '../components/session';
import { withAuthentication } from './../components/session';

class AppRouter extends React.Component {


    render() {
    return (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path={ROUTES.LANDING} component={Landing}/>
                <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                <Route path={ROUTES.HOME} component={CyberApp}  />
                <Route path={ROUTES.COURSES} component={Courses}/> 
                <Route path={ROUTES.ABOUT} component={About} />
                <Route path={ROUTES.ADMIN} component={Admin} />
                <Route path={ROUTES.HOME} component={CyberApp}  />
                <Route path="/course/:course/:id?" component={Course}/>
                <Route path="/*" component={Landing}/>

            </Switch>
        </div>
    </BrowserRouter>
    

    );   
}
}


export default withAuthentication(AppRouter);