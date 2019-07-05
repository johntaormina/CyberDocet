import React from 'react';
import { withFirebase } from './../firebase/context';
import EmployeeCourses from './EmployeeCourses.js';

class AdminHome extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        
        return(
            <div className="admin__main__page">
                <p>You are the admin of {this.props.adminData.company}</p>
                <p>Your employee sign up ID is: {this.props.adminData.companyID}</p>
                <EmployeeCourses 
                    adminData = {this.props.adminData}
                    ID = {this.props.ID}
                />
            </div>
        )
    }
}

export default withFirebase(AdminHome);