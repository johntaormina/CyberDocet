import React from 'react';
import Youtube from 'react-youtube';

class LearnMore extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id: ""
        };
    }

    componentDidMount(){
        this.setState({id: "-PmPyALVBJU"})
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
                    <div className="video">
                    <Youtube    
                        videoId={this.state.id}
                        opts={opts}
                    />
                    </div>
                
                </div>

            </div>
        )
    }
}

export default LearnMore;


// -PmPyALVBJU
{/* <Youtube
    videoId={this.state.id}
    opts={opts}
/> */}