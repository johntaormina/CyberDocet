import React from 'react';
import { withFirebase } from './firebase/context';
import { AuthUserContext} from './session';
import SignInPage from './authentication/SignIn';
import AppLandingButton from './buttons/AppLanding';
import AppSectionButton from './buttons/AppSection';

class CourseApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <CourseAppAuth/> 
                : <SignInPage/>
            }
            </AuthUserContext.Consumer>
            </div>
        );
    }   
}

class CourseAppAuth extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
            <h2> Welcome to the Cyber Docet!!</h2>
            </div>
        );
    }
}



export default withFirebase(CourseApp);