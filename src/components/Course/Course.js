import React from 'react';
import { withFirebase } from '../firebase/context';
import { AuthUserContext} from '../session';
import SignInPage from '../authentication/SignIn';
import Section from './Section.js';
import Landing from './Landing.js';

class Course extends React.Component {
    constructor(props){
        super(props);

        
    }

    render() {
        
        return (
            <div>
            <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <CoursesAuth 
                user={authUser}
                match={this.props.match}
                firebase={this.props.firebase}
                 /> : <SignInPage/>
            }
            </AuthUserContext.Consumer>
            </div>
        );
    }   
}

// Check which component should be loaded and pass in the information
// 1) Course Landing page
// 2) Course Section page
class CoursesAuth extends React.Component {
    constructor(props){
        super(props);
        this.firebase = this.props.firebase;
        this.params = this.props.match.params;
        this.uid = this.props.user.uid;
    }


    render() {
        //console.log(this.params);
        const id = !!this.params.id;
        return (
            <div>
                {id ? 
                    <Section
                    props={this.props}
                    /> : 
                    <Landing
                    props={this.props}
                    />
                }

            </div>
        )
    }
}

export default withFirebase(Course)