import React from 'react';
import { withFirebase } from './../firebase/context.js';
import CourseProgress from './../utils/CourseProgress.js';

class EmployeeCourses extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            loading: false,
            employees: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.adminEmployeeList(this.props.ID)
        .on('value', snapshot => {
            const employeeObject = snapshot.val();

            const employeeList = Object.keys(employeeObject)
            .map(key =>(employeeObject[key]));

            this.setState({
                employees: employeeList,
                loading: false
            })
        })
    }

    render(){
        const {employees, loading} = this.state;
        return(
            <div>
                {loading && <div>Loading...</div>}

                <EmployeeList
                    employees={employees}
                    firebase={this.props.firebase}
                />
            </div>
            
        )
    }

    componentWillUnmount(){
        this.props.firebase.adminEmployeeList(this.props.ID).off();
    }
}

class EmployeeList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <h2>Employees: </h2>
            <ul>
                {this.props.employees.map(employee =>(
                    <EmployeeData 
                    uid={employee} 
                    firebase={this.props.firebase}
                    key={employee}/>
                ))}
            </ul>
            </div>
        )
        
    }
}

class EmployeeData extends React.Component{
    constructor(props){
        super(props);
        this.uid = this.props.uid;

        this.state = {
            loading: false,
            data: {}
        };
    }

    componentDidMount(){
        
        this.setState({loading: true});

        this.props.firebase.user(this.uid)
        .on('value', snapshot => {
            const userData = snapshot.val();
            
            this.setState({
                loading: false,
                data: userData
            })
        });

    }

    render(){
        const { data, loading } = this.state;
        return(
            <div>
                {loading && <div></div>}
                {!loading ? 
                    <div>
                        <p>{data.username}                 
                        </p>
                        <CourseProgress courseData={data.Courses}/>
                        <p> </p>
                    </div> : 
                    <div>Loading...</div>
                }
            </div>
        )
    }

    componentWillUnmount(){
        this.props.firebase.user(this.uid).off();
    }
}

export default withFirebase(EmployeeCourses);