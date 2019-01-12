import React from 'react';
import {withRouter} from 'react-router-dom';

class AppSectionButton extends React.Component {
    constructor(props){
        super(props);
        this.courseURL = this.props.courseURL;
        this.sectionURL = this.props.sectionURL;
    }

    nextPath(path){
        this.props.history.push(path);
    }

    render(){
        
        return(
            <div><h4>

            <button onClick={()=>
            this.nextPath(`/course/${this.courseURL}/${this.sectionURL}`)}>
            
            Go to Section Page

            </button>
            
            </h4></div>
        )
    }
}

export default withRouter(AppSectionButton);