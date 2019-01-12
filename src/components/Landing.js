import React from 'react';
import { withFirebase } from './firebase/context';
import SignInPage from './authentication/SignIn';
import CyberApp from './CyberApp';
import { AuthUserContext } from './session';

class Landing extends React.Component {


    render() {
        return (
            <div>
            <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <CyberApp/> : <SignInPage/>
            }
            </AuthUserContext.Consumer>
    </div>
        );
    }
}


export default withFirebase(Landing);