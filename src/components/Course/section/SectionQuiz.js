import React from 'react';
import Quiz from 'reactjs-quiz';

export default class SectionQuiz extends React.Component{
  _isMounted = false;
  constructor(props){
    super(props);
    this.quiz = this.props.sectionQuiz;
    this.firebase = this.props.props.props.firebase;
    this.sectionTitle = this.props.sectionData.title;
    this.courseOfSection = this.props.sectionData.course;
    this.uid = this.props.props.props.data.uid;
    this.name = this.props.sectionData.name;

    this.state = {
      sectionData: {},
      loading: false
    };
  }

  componentDidMount(){
    this._isMounted = true;
    if(this._isMounted){
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

  completed(){
    this.firebase.section(this.uid, this.name, this.courseOfSection)
        .update({completed: true})
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render(){
    this.completed();
    
    return(

      <div className="quiz__page__container">

        <div className="quiz__container">
          <div className="quiz">
            <Quiz quiz={this.quiz}></Quiz>
          </div>
            
        </div>

      </div>

    )
  }
}