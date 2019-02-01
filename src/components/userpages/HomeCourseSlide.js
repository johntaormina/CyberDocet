import React from 'react';
import { courseProgress } from './../utils/CourseProgress';
import { ProgressBar } from 'react-bootstrap';

const data = ["Intro", "Phishing", "Internet"]

export default class HomeCourseSlide extends React.Component {
    constructor(props){
        super(props);
        this.data = this.props.data;
        this.nextProperty = this.nextProperty.bind(this);
        this.prevProperty = this.prevProperty.bind(this);

        this.state = {
            id: "",
            properties: data,
            property: data[0]
        };
    }



    nextProperty = () => {
        const newIndex = data.indexOf(this.state.property)+1;
        this.setState({
            property: data[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = data.indexOf(this.state.property)-1;
        this.setState({
            property: data[newIndex]
        })
    }

    render(){
        const {properties, property} = this.state;
        return(
            <div className="learnmore__slideshow">
            <div className="col">
            <div 
            className= {`cards-slider active-slide-${properties.indexOf(property)}`}>
            <div 
            className="cards-slider-wrapper"
            style={{'transform': `translateX(-${properties.indexOf(property)*(100/properties.length)}%)`}}>
            {
                properties.map(property => <StemCourseBlock
                    property={property}
                    key={property}
                    userData={this.data}
                />)
            }
            </div>
            </div>
            </div>
            <div className="learnmore__buttons__container">
                <button 
                    className="learnmore__nextprev__button"
                    onClick={() => this.prevProperty()} 
                   
                    ><i className="fas fa-angle-left fa-2x"></i>
                </button>

                <button 
                    className="learnmore__nextprev__button"
                    onClick={() => this.nextProperty()} 
                    disabled={data.indexOf(property) === data.length-1}
                    ><i className="fas fa-angle-right fa-2x"></i>
                </button>
            </div>
            </div>
            
        )
    }
}

class StemCourseBlock extends React.Component {
    constructor(props){
        super(props);

        this.property = this.props.property;
        this.userData = this.props.userData;
    }

    render(){
        console.log(this.userData);
        let box;
        if(this.property === 'Intro'){
            box = <CourseProgressBlock
                courseData={this.userData.Course1}
            />
        } 
        else if(this.property === 'Phishing'){
            box = <CourseProgressBlock
                courseData={this.userData.Course2}
            />
        }
        else {
            box = <CourseProgressBlock
                courseData={this.userData.Course3}
            />
        }
        
        return(
            <div>
                {box}
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