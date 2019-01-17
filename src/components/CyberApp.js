import React from 'react';
import { withFirebase } from './firebase/context';
import { AuthUserContext} from './session';
import AuthLanding from './authentication/AuthLanding';
import AdminHome from './adminpages/AdminHome';

class CourseApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <CourseAppAuth user={authUser} firebase={this.props.firebase}
                /> 
                : <AuthLanding/>
            }
            </AuthUserContext.Consumer>
            </div>
        );
    }   
}

class CourseAppAuth extends React.Component {

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

    render() {
        
        return (
            <div>
            {this.state.loading ? 

            <div>
            {!!this.state.adminData ? 
                <AdminHome adminData={this.state.adminData} 
                ID={this.props.user.uid}
                /> : <div>NOT ADMIN</div>
            }
            </div> : <div>LOADING</div>
            
            }
            
            </div>
        );
    }
}



export default withFirebase(CourseApp);