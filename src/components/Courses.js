import React from 'react';
import { withFirebase } from './firebase/context';
import { AuthUserContext} from './session';
import SignInPage from './authentication/SignIn';
import AppLandingButton from './buttons/AppLanding';
import AppSectionButton from './buttons/AppSection';

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
                : <SignInPage/>
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

    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.firebase.user(this.uid).on('value', snapshot => {
            const object = snapshot.val();

            this.setState({
                courseData: object.Courses,
                loading: false
            });
        });
    }

    render() {
        const {courseData, loading} = this.state; 
        return (
            <div>
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
    
    <div>
    {Object.keys(allCourseData).map(courseName => (
        <div key={courseName}>

        <div className="row">
        <h2>Course: {allCourseData[courseName].title} </h2>
        
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
            <ul>
            <div>
            {Object.keys(this.getSections(this.courseData)).map(section => (
                <div key={section} className="row">

                <h4>
                {this.courseData[section].title} Completed:
                {this.courseData[section].completed ? ' YES' : ' NO'}
                </h4>
                <AppSectionButton
                courseURL={this.courseData.urlID}
                sectionURL={this.courseData[section].urlID}
                />
                </div>
            ))}
            </div>
            </ul>
        )
    }
}

export default withFirebase(Courses);