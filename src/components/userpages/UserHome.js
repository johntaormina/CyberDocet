import React from 'react';
import { courseProgress } from './../utils/CourseProgress';
import { ProgressBar } from 'react-bootstrap';


class UserHome extends React.Component {
    constructor(props){
        super(props);
        this.uid = this.props.uid;
        this.firebase = this.props.firebase;

        this.state = {
            loading: false,
            userData: {}
        }
    }

    componentWillMount(){ 
        this.setState({loading: true});

        this.firebase.user(this.uid).on('value', snapshot => {
            const object = snapshot.val();
           
            this.setState({userData: object});
            this.setState({loading: false});
        });
    }

    componentWillUnmount(){
        this.firebase.user(this.uid).off();
    }

    render(){
        const {loading} = this.state;
        const {userData} = this.state;
        
        return(
            <div className="page">
                {loading ? 
                'Loading...'
                :
                <div>
                    <h1>Welcome {this.state.userData.username}</h1>

                    {/* Course Progress Component */}
                    <div className="slideshow__container">
                    {Object.keys(userData.Courses).map(
                        key => (
                            <div key={key}>
                            <CourseProgressBlock    
                                courseData={userData.Courses[key]}
                            />
                            </div>
                            
                        )
                    )}
                    
                    </div>

                </div>
                }

            </div>
        )
    }
}

class CourseProgressBlock extends React.Component {
    constructor(props){
        super(props);
        this.courseData = this.props.courseData;

        this.state = {
            loading: false,
            sections: []
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

    

    render(){
        const {loading} = this.state;
        const {sections} = this.state;
        const progress = courseProgress(this.state.sections);
        
        return(
            <div>
                {loading ? 
                <div></div> 
                : 
                <div className="course__block__container">
                    <h1 className="course__block__header">
                        {sections[0].course}
                    </h1>
                    <div className="course__block__line"></div>

                    <div>
                        {sections.map(element => (
                            <p
                            className="course__block__sections"
                            key={element.title}
                            >
                            {element.title}</p>
                        ))}
                    </div>

                    <div className="course__block__bar">
                        <ProgressBar
                            active
                            now={progress}
                            label={`${progress}%`}
                        />
                        
                    </div>

                    

                </div>
                }
            </div>
        )
    }
}

export default UserHome;