import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyB4dkdmZHVKisRuMWMMkWjhauyL4sWMyf4",
    authDomain: "cyberdocet-bf1f2.firebaseapp.com",
    databaseURL: "https://cyberdocet-bf1f2.firebaseio.com",
    projectId: "cyberdocet-bf1f2",
    storageBucket: "cyberdocet-bf1f2.appspot.com",
    messagingSenderId: "480877001658"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }
    //
    // AUTH API
    //

    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
    

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => 
        this.auth.signOut();
    

    doPasswordReset = (email) => 
        this.auth.sendPasswordResetEmail(email);
    

    doPasswordUpdate = (password) => 
        this.auth.currentUser.updatePassword(password);

    //
    // USER API 
    //

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    section = (uid, sectionTitle, courseOfSection) => 
    this.db.ref(`users/${uid}/Courses/${courseOfSection}/${sectionTitle}`)

    getSections = (course) => {
        var clone = JSON.parse(JSON.stringify(course));
        const courseSections = clone

        Object.keys(courseSections).forEach( key => (
            (typeof courseSections[key] === 'string') && 
            delete courseSections[key]
        ));
        return courseSections;
    };
    
}

export default Firebase;

