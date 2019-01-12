import React from 'react';

import FirebaseContext, { withFirebase } from './../firebase/context.js';


const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut} className="header__button">
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);