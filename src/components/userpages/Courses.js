import React from 'react';
import { withFirebase } from '../firebase/context';
import { AuthUserContext} from '../session';
import AppLandingButton from '../buttons/AppLanding';
import AppSectionButton from '../buttons/AppSection';
import HomePage from '../HomePage';

class Courses extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <CoursesAuth uid={authUser}
                firebase={this.props}/> 
                : <HomePage/>
            }
            </AuthUserContext.Consumer>
            </div>
        );
    }   
}

class CoursesAuth extends React.Component {

    constructor(props){
        super(props);
        this.uid = this.props.uid.uid;

        this.state = {
            loading: false,
            courseData: {}
        };
    }

    componentWillMount() {
        this.setState({ loading: true });

        this.props.firebase.firebase.user(this.uid).on('value', snapshot => {
            const object = snapshot.val();

            this.setState({
                courseData: object.Courses,
                loading: false
            });
        });
    }

    componentWillUnmount(){
        this.props.firebase.firebase.user(this.uid).off();
    }

    render() {
        const {courseData, loading} = this.state; 
        return (
            <div className="courses__page">
            {loading && <div>Loading ...</div>}
            
            <ListOfCourses 
            allCourseData={courseData}
            loading={loading}
            />
            </div>
        );
    }
}


const ListOfCourses = ({allCourseData}) => (
    
    <div className="courses__container">
    {Object.keys(allCourseData).map(courseName => (
        <div key={courseName}
        >

        <div className="courses__headertext">
        <h2>{allCourseData[courseName].title} </h2>
        
        </div>

        <ListOfSections 
        courseData={allCourseData[courseName]}/>

        </div>
    ))}
    </div>
        
    
);

class ListOfSections extends React.Component {

    constructor(props){
        super(props);
        this.courseData = this.props.courseData;
        this.getSections = this.getSections.bind(this);
    }

    getSections = (course) => {
        var clone = JSON.parse(JSON.stringify(course));
        const courseSections = clone

        Object.keys(courseSections).forEach( key => (
            (typeof courseSections[key] === 'string') && 
            delete courseSections[key]
        ));
        return courseSections;
    };

    render() {
      
        return (
            
            <div className="sections__container">
            {Object.keys(this.getSections(this.courseData)).map(section => (
                <div key={section} 
                className="section__container">

                <h4 className="section__text">

                <AppSectionButton
                courseURL={this.courseData.urlID}
                sectionURL={this.courseData[section].urlID}
                title={this.courseData[section].title}
                />

                </h4>
                {this.courseData[section].completed ? 
                <div className="completed__container">
                    <div>
                    <h4 className="completed__text">Completed</h4>
                    </div>
                    
                    <div className="completed__logo">

                    </div>

                </div> : 

                <div className="completed__container">
                    <div>
                    <h4 className="completed__text">Not Completed</h4>
                    </div>
                    
                    <div className="notcompleted__logo">

                    </div>

                </div>

                }
                

                

                </div>
            ))}
            </div>
            
        )
    }
}

export default withFirebase(Courses);