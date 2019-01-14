import React from 'react';
import Youtube from 'react-youtube';

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
        
        

        this.state = {
            sectionData: {},
            loading: false
        };
    }

    componentDidMount(){
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
        .update({completed: true})
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };
        
        return(
            <div>
                <Youtube
                    videoId={this.videoID}
                    opts={opts}
                    onReady={this._onReady}
                    onStateChange={this._onStateChange}
                    onEnd={()=>{this._onEnd(event, this.updateSectionAsCompleted())}}

                />

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

    _onEnd(event, completed){
        completed;
    }
    
}

export default SectionVideo;