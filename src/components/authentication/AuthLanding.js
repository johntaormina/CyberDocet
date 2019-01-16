import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AuthLanding extends React.Component{
    constructor(props){
        super(props);
    }

    nextPath(path){
        this.props.history.push(path);
    }


    render(){

        return(
            <div>
            <div>
                <h1>USER PORTAL: </h1>
                <button onClick={() => this.nextPath('/signup') }>Sign Up</button>
                <button onClick={() => this.nextPath('/signin') }>Sign In</button>
            </div>
            <div>
                <h1>ADMIN PORTAL: </h1>
                <button onClick={() => this.nextPath('/adminsignup') }>Sign Up</button>
                <button onClick={() => this.nextPath('/adminsignin') }>Sign In</button>
            </div>
            </div>
            
        )
    }
}

export default withRouter(AuthLanding);