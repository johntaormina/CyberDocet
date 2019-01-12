import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import Firebase from './components/firebase/firebase.js';
import FirebaseContext from './components/firebase/context.js'

import './styles/styles.scss';


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
    <AppRouter/>
    </FirebaseContext.Provider>,
    document.getElementById('app'));
