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

    //
    // ADMIN STUFF
    //

    admin = uid => this.db.ref(`admins/${uid}`);

    adminEmployeeList = uid => this.db.ref(`admins/${uid}/employees`);

    // Finds who the admin is of companyID and then
    // adds that username to employee list given userUID
    async addToCompanyList(companyID, userUID) {
        var res = "";

        var adminsRef = this.db.ref('admins');

        var snapshot = await adminsRef.once("value");

        if(snapshot.exists()){ // find admin ID and set to res
            let data = snapshot.val();
            Object.keys(data).forEach(key => {
                if(data[key].companyID === companyID){
                    this.db.ref(`admins/${key}/employees`).push(userUID);
                    res = true;
                }
            })
        }else{
            res = false;
        }
        return res;
    }
     
    
    
}

export default Firebase;

