import React from 'react';
import { withFirebase } from '../firebase/context';
import { AuthUserContext} from '../session';
import NotFound from './../NotFound.js';
import SignInPage from '../authentication/SignIn';
import Youtube from 'react-youtube';
import SectionVideo from './section/SectionVideo';
import Quiz from 'react-quiz-component';
import SectionQuiz from './section/SectionQuiz';


class Course extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <CourseExists data={authUser} 
                id={this.props.props.match.params.id}
                firebase={this.props.props.firebase}
                />
                : <SignInPage/>
            }
            </AuthUserContext.Consumer>
            </div>
        );
    }   
}

class CourseExists extends React.Component {
    constructor(props) {
        super(props);
        this.uid = this.props.data.uid;
        this.id = this.props.id;
        this.firebase = this.props.firebase;
        this.getSectionInfo = this.getSectionInfo.bind(this);
        this.state = {
            loading: false,
            courseData: {}
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        this.firebase.user(this.uid).on('value', snapshot => {
            const object = snapshot.val();

            this.setState({
                courseData: object.Courses,
            })

            this.getSectionInfo(this.state.courseData, this.id);
            this.setState({loading: false});
        })
        
    }

    getSectionInfo(courseData, id){
        var obj = {};
        Object.keys(courseData).forEach( key => {
            const sections = this.firebase.getSections(courseData[key]);
            Object.keys(sections).forEach( key => {
                if(sections[key].urlID === id){
                    obj = {...sections[key]}
                    
                }
            })
        })
        return obj;
    }

    render() {
        const {courseData, loading} = this.state;
        const sectionData = {...this.getSectionInfo(courseData,this.id)}
        const titleExists = !!sectionData.title;
       
        return (
            <div>
                {loading && <div>Loading...</div>}

                {titleExists ?  
                    <GenerateSection
                    sectionData={sectionData}
                    props={this.props}/> 
                    : <NotFound/>}

            </div>
        );
    }
}

class GenerateSection extends React.Component {

    constructor(props){
        super(props);
        this.sectionData = this.props.sectionData;
    }

    render() {
        return (
            <div>

            <div>
                <h2>Section: {this.sectionData.title}</h2>
                <h3>Completed: {this.sectionData.completed ? 'YES' : 'NO'} </h3>
            </div>

            <div>

            {!!this.sectionData.videoID ? 
                <div>
                <SectionVideo
                    sectionData={this.sectionData}
                    props={this.props}
                />
                </div> :
                <div>
                    <SectionQuiz sectionQuiz={this.sectionData.sectionQuiz}
                        props={this.props}
                        sectionData={this.sectionData}
                    />
                </div>
            }
                
            </div>

            </div>
            
        );
    }

    
}




export default withFirebase(Course);