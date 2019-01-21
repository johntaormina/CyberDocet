import React from 'react';
import { withFirebase } from './../firebase/context.js';
import { coursesProgress } from '../utils/CoursesProgress.js';
import { ProgressBar } from 'react-bootstrap';

class EmployeeCourses extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            loading: false,
            employees: []
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
            <h2>Employees</h2>

            
            <div className="emp__main__container">
            
                {this.props.employees.map(employee =>(
                    <EmployeeData 
                    uid={employee} 
                    firebase={this.props.firebase}
                    key={employee}/>
                ))}
            
            </div>

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
            data: {},
            dropdown: false
        };
    }

    componentDidMount(){
        
        this.setState({loading: true});

        this.props.firebase.user(this.uid)
        .on('value', snapshot => {
            const userData = snapshot.val();
            
            this.setState({
                loading: false,
                data: userData,
                dropdown: false
            })
        });

    }



    render(){
        const { data, loading, dropdown } = this.state;
        const progress = coursesProgress(data.Courses)
        
        return(
            <div>
                {loading && <div></div>}
                {!loading ? 
                    
                    <div>
                        {dropdown ?

                        <div className="emp__data__container__on">
                        
                        <div className="emp__name">
                        <button 
                        className="emp__name__button"
                        onClick={()=>(this.setState({dropdown: !dropdown}))}>
                            {data.username}
                        </button>
                        </div>
                        
                        <div className="progress__container">
                            <div>
                                {progress}% Complete
                            </div>
    
                            <div className="progress__bar">
                            <ProgressBar active now={progress}/>
                            </div>

                            <div className="emp__extras__container">

                                {Object.keys(data.Courses).map(
                                    key => (
                                    <div className="emp__extra__box"
                                    key = {key}>
                                    <CourseExtraBox
                                    courseData={data.Courses[key]}
                                    />
                                    </div>
                                    )
                                )}
                                
                                

                            </div>
                            
                        </div>
    
                        </div>

                        :

                        <div className="emp__data__container">
                        
                        <div className="emp__name">
                        <button 
                        className="emp__name__button"
                        onClick={()=>(this.setState({dropdown: !dropdown}))}>
                            {data.username}
                        </button>
                        </div>
                        
                        <div className="progress__container">
                            <div>
                                {progress}% Complete
                            </div>
    
                            <div className="progress__bar">
                            <ProgressBar active now={progress}/>
                            </div>
                        </div>
    
                        </div>
                        
                        }
                    </div>
                     
                     : 
                    <div>Loading...</div>
                }
            </div>
        )
    }

    componentWillUnmount(){
        this.props.firebase.user(this.uid).off();
    }
}

class CourseExtraBox extends React.Component {
    constructor(props){
        super(props);
        this.courseData = this.props.courseData;
        this.title = this.courseData.title;
        
        this.state={
            loading: false,
            sections: {}
        }
    }

    componentWillMount(){
        this.setState({loading: true});

        const sections = Object.keys(this.courseData).map(
            key => {
                if(typeof this.courseData[key] !== 'string'){
                    return this.courseData[key];
                }
            }
        ).filter(el => (el !== undefined))

        this.setState({
            sections: sections,
            loading: false
        });
    }

    render() {
        const {loading, sections } = this.state;
        const green = {
            color: 'green'
        }
        const red = {
            color: 'red'
        }
        return(
            <div>
                {loading ? 
                <div>
                    ...
                </div>
                :
                <div>
                    <h1 className="emp__extra__header">{this.title}</h1>
                    {sections.map(element => (
                        <ul 
                        className="emp__extra__list"
                        key={element.title}
                        >
                        {element.title}... {element.completed ? <i className="fas fa-check" style={green}></i> : <i className="fas fa-times" style={red}></i>}
                        </ul>
                    ))}
                </div>
                }
            </div>
        )
    }
}

export default withFirebase(EmployeeCourses);

