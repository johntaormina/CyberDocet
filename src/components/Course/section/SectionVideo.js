import React from 'react';
import Youtube from 'react-youtube';
import Quiz from 'reactjs-quiz';

class SectionVideo extends React.Component {
    _isMounted = false;
    
    constructor(props){
        super(props);
        this.firebase = this.props.props.props.firebase;
        this.sectionTitle = this.props.sectionData.title;
        this.courseOfSection = this.props.sectionData.course;
        this.uid = this.props.props.props.data.uid;
        this.videoID = this.props.sectionData.videoID;
        this.name = this.props.sectionData.name;
        this.sectionQuiz = this.props.sectionData.sectionQuiz;


        this.state = {
            sectionData: {},
            loading: false,
            videoFinished: false
        };
    }

    componentWillMount(){
        this._isMounted = true;
        if (this._isMounted){
            this.setState({loading: true});
                this.firebase.section(this.uid, this.name, this.courseOfSection)
                .on('value', snapshot => {
            const object = snapshot.val();

            this.setState({
                sectionData: object,
            })
            this.setState({loading: false});
        });
        }
        
    }

    

    updateSectionAsCompleted(){
        this.firebase.section(this.uid, this.name, this.courseOfSection)
        .update({completed: true});
        this.setState({videoFinished: true});
        window.scrollTo({
            top: 690,
            left: 0,
            behavior: 'smooth'
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

      

    render(){
        const opts = {
            height: '480',
            width: '854',
            playerVars: {
                autoplay: 1
            }
        };
        
        return(
            <div className="video__page__container">

                <div className="video__container">
                <h1 className="video__section__header">{this.sectionTitle}</h1>
                    <div className="video">
                    <Youtube    
                        videoId={this.videoID}
                        opts={opts}
                        onReady={this._onReady}
                        onStateChange={this._onStateChange}
                        onEnd={()=>{this.updateSectionAsCompleted()}}
                    />
                    </div>
                
                </div>

                <div>
                {!this.state.videoFinished ?
                    <QuizNotReady/> 
                    :
                    <QuizReady
                        sectionQuiz={this.sectionQuiz}
                    />
                }
                </div>
                
                
            </div>
        )
    }

    _onReady(event){
        event.target.playVideo();
    }

    _onStateChange(event){
        if(event.data == 0){
            
        }
    }

    
}

export default SectionVideo;

class QuizNotReady extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="video__quiznotready__container">
                <h1 className="video__notreadytext">Quiz will load after video... </h1>
            </div>
            
        )
    }
}

class QuizReady extends React.Component{
    constructor(props){
        super(props);
        this.sectionQuiz = this.props.sectionQuiz;
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="video__quiz__container"> 

                <div >
                    <div className="quiz">
                        <Quiz quiz={this.sectionQuiz}></Quiz>
                    </div>       
                </div>

            </div> 
        )
    }
}