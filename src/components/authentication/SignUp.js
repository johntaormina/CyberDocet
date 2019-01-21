import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import FirebaseContext, { withFirebase } from './../firebase/context.js';
import * as ROUTES from './../../routers/routes.js';
import InitialCourseState from './InitialCourseState.js';


const INITIAL_STATE = {
    companyID: '',
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const INITIAL_COURSE_STATE = InitialCourseState;

const SignUpPage = () => (
    <div className="page">
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

class SignUpFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
        
    }

    componentDidMount(){
        // console.log('the-best-company129');
        // let value = this.props.firebase.adminOfCompany('the-best-company129', '22');
        // value.then(function(res){
        //     console.log(res);
        // })
    }

    onSubmit = event => {
        const { username, email, passwordOne, companyID } = this.state;
        let uid = "";
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                uid = authUser.user.uid;
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        companyID,
                        Courses: INITIAL_COURSE_STATE
                    });
            })
            .then(() => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .addToCompanyList(companyID, uid);
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            companyID,
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '' || 
            companyID ==='';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="companyID"
                    value={companyID}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Company SignUp ID"
                  
                />
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                  
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button
                    type="submit"
                    disabled={isInvalid}
                >Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}


const SignUpLink = () => (
    <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };