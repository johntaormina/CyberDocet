import React from 'react';
import {NavLink} from "react-router-dom";
import SignOutButton from './authentication/SignOut.js';
import * as ROUTES from './../routers/routes.js';
import { AuthUserContext } from './session/';
import { withFirebase } from './firebase/context';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <HeaderAuth firebase={this.props.firebase} user={authUser} 
                    /> : <HeaderNotAuth/>
                }
            </AuthUserContext.Consumer>
            </div>
        )}  
    
}

class HeaderAuth extends React.Component {
    constructor(props){
        super(props);

        this.firebase = this.props.firebase;
        this.uid = this.props.user.uid;

        this.state = {
            loading: false,
            adminData: {}
        }

    }

    componentDidMount(){

        this.firebase.admin(this.uid).on('value', snapshot => {
            const object = snapshot.val();
            
            this.setState({
                adminData: object,
            })

      
            this.setState({loading: true});
        })
        
    }

    componentWillUnmount(){
        this.firebase.admin(this.uid).off();
    }

    render(){
        
        return (
            <div>
            {this.state.loading ? 

            <div>
            {!!this.state.adminData ? 
                <AdminHeader/> : <UserHeader/>
            }
            </div> : <div></div>
            
            }
            
            </div>
        )
    }
    
};

const UserHeader = () => (
    <header>

    <div className = "header">

    <div className="header--left">
    <NavLink to={ROUTES.LANDING}>
    <button className="header__button">
    CyberDocet
    </button></NavLink>
    </div>

    <div className="header--right">
    <NavLink to={ROUTES.COURSES}>
    <button className="header__button">
    Courses
    </button></NavLink>

    <NavLink to={ROUTES.ABOUT}>
    <button className="header__button">
    About
    </button></NavLink>

    <SignOutButton/>

    </div>
        
    </div>  
    </header> 
)

const AdminHeader = () => (
    <header>

    <div className = "header">

    <div className="header--left">
    <NavLink to={ROUTES.LANDING}>
    <button className="header__button">
    CyberDocet
    </button></NavLink>
    </div>

    <div className="header--right">

    <NavLink to={ROUTES.ABOUT}>
    <button className="header__button">
    About
    </button></NavLink>

    <SignOutButton/>

    </div>
        
    </div>  
    </header> 
)

const HeaderNotAuth = (props) => (
    <header>

    <div className = "header">

    <div className="header--left">
    <NavLink to={ROUTES.LANDING}>
    <button className="header__button">
    CyberDocet
    </button></NavLink>
    </div>
    
    <div className="header--right">
    


    </div>
        
    </div>  
    </header>   
);

export default withFirebase(Header);