import React from 'react';
import {withRouter} from 'react-router-dom';

class AppLandingButton extends React.Component {
    constructor(props){
        super(props);
    }

    nextPath(path){
        this.props.history.push(path);
    }

    render(){
        const url = this.props.courseURL
        return(
            <div><h2>

            <button onClick={()=>this.nextPath(`/course/${url}`)}>
            
            Go to Course Landing Page

            </button>
            
            </h2></div>
        )
    }
}

export default withRouter(AppLandingButton);