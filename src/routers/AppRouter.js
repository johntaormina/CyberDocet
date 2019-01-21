import React from 'react';
import CyberApp from '../components/CyberApp.js';
import About from '../components/About.js';
import Courses from '../components/userpages/Courses.js';
import Header from '../components/Header.js'
import SignIn from '../components/authentication/SignIn.js';
import SignUp from '../components/authentication/SignUp.js';
import Course from '../components/Course/Course.js';
import AdminSignUp from '../components/authentication/admin/AdminSignUp.js';
import AdminSignIn from '../components/authentication/admin/AdminSignIn.js';
import Footer from '../components/Footer.js';

import * as ROUTES from './routes.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { withAuthentication } from './../components/session';
import LearnMore from '../components/LearnMore.js';
import Contact from '../components/Contact.js';

class AppRouter extends React.Component {


    render() {
    return (
    <BrowserRouter>
        <div>

            <Header/>            
            <Switch>
                <Route exact path={ROUTES.LANDING} component={CyberApp}/>
                <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                <Route path={ROUTES.ADMIN_SIGN_UP} component={AdminSignUp}/>
                <Route path={ROUTES.ADMIN_SIGN_IN} component={AdminSignIn}/>
                <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                <Route path={ROUTES.COURSES} component={Courses}/> 
                <Route path={ROUTES.ABOUT} component={About} />
                <Route path={ROUTES.HOME} component={CyberApp}  />
                <Route path={ROUTES.LEARNMORE} component={LearnMore}/>
                <Route path={ROUTES.CONTACT} component={Contact}/>
                <Route path="/course/:course/:id?" component={Course}/>
                <Route path="/*" component={CyberApp}/>
            </Switch>
            <Footer/>

        </div>
    </BrowserRouter>
    

    );   
}
}


export default (withAuthentication(AppRouter));