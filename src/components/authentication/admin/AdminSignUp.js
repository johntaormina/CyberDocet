import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import FirebaseContext, { withFirebase } from './../../firebase/context';
import * as ROUTES from './../../../routers/routes';

const INITIAL_STATE = {
    username: '',
    company: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};


const AdminSignUpPage = () => (
    <div className="page">
        <h1>Admin SignUp</h1>
        <AdminSignUpForm />
    </div>
);

class AdminSignUpFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
        
    }

    onSubmit = event => {
        const { username, company, email, passwordOne } = this.state;

        // Creating company ID for employee signup and saving it
        
        const companyID = (company.replace(/ +/g, "-"))
        .concat(Math.floor(Math.random()*1000).toString());
        
        //

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .admin(authUser.user.uid)
                    .set({
                        username,
                        company, 
                        email,
                        companyID,
                        employees: []
                    });
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
            username,
            company, 
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}
            className="signup__inputs__container">
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                    className="signup__empass"
                />
                <input
                    name="company"
                    value={company}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Company Name"
                    className="signup__empass"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                    className="signup__empass"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    className="signup__empass"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                    className="signup__empass"
                />
                <button
                    type="submit"
                    disabled={isInvalid}
                    className="signup__button"
                >Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}


const AdminSignUpLink = () => (
    <p>
        Admin SignUp! <Link to="/adminsignup">Sign Up</Link>
    </p>
);

const AdminSignUpForm = compose(
    withRouter,
    withFirebase,
)(AdminSignUpFormBase);

export default AdminSignUpPage;

export { AdminSignUpForm, AdminSignUpLink };