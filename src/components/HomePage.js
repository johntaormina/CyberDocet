import React from 'react';
import { withRouter } from "react-router-dom";
import Shady from './shady/HomeShady.js';

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <div className="home__container">
                    {/* <h1 className="home__title">CyberDocet</h1>
                    <h4 className="home__subtitle">Security training made easy.</h4> */}

                    <div className="home__biglogo"/>
                           
                    <button
                    onClick={()=>{this.props.history.push('/learnmore')}}
                    className="home__learnmore__button">
                    Learn More
                    </button>


                    <Shady/>

                    <div className="home__camera">
                        
                    </div>
            </div>
        )
    }
}


export default withRouter(HomePage);