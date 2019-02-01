import React from 'react';
import Youtube from 'react-youtube';

const data = ["AdminTracking", "VideoQuizzes", "NewContent", "Free"]

class LearnMore extends React.Component{
    constructor(props){
        super(props);

        this.nextProperty = this.nextProperty.bind(this);
        this.prevProperty = this.prevProperty.bind(this);

        this.state = {
            id: "",
            properties: data,
            property: data[0]
        };
    }

    componentDidMount(){
        this.setState({id: "-PmPyALVBJU"})
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
        

        const opts = {
            height: '480',
            width: '854',
            playerVars: {
                autoplay: 1
            }
        };

        return(
            <div className="learnmore__page">

            <div className="learnmore__slideshow">


                
                <div className="col">

                    <div 
                    className=
                    {`cards-slider active-slide-${properties.indexOf(property)}`}>

                    <div 
                    className="cards-slider-wrapper"
                    style={{'transform': `translateX(-${properties.indexOf(property)*(100/properties.length)}%)`}}
                    >
                    {
                        properties.map(property => <FeatureBox 
                        property={property}
                        key={property}/>)
                    }
                    </div>

                    </div>

                </div>

                

            </div>

            <div className="learnmore__buttons__container">
                <button 
                    className="learnmore__nextprev__button"
                    onClick={() => this.prevProperty()} 
                    disabled={data.indexOf(property) === 0}
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

export default LearnMore;

class FeatureBox extends React.Component {
    constructor(props){
        super(props);

        this.property = this.props.property;
       
    }

   


    render(){
        let box;
        if(this.property === 'AdminTracking'){
            box = <AdminTrackingBox/>
        } 
        else if(this.property === 'NewContent'){
            box = <NewContentBox/>
        }
        else if(this.property === 'Free'){
            box = <FreeBox/>
        }
        else {
            box = <VideosQuizzesBox/>
        }
        
        return(
            <div>
                {box}
            </div>
        )
    }
}

const AdminTrackingBox = () => (
    
    <div className="featbox__container">
        <h1 className="featbox__title">
        Advanced Employee Monitoring</h1>
        <div className="featbox__image__admintracking"/>
        <h3 className="featbox__text">
            As an admin, track your employees training progression and send them alerts with our easy to use platform.
        </h3>
    </div>
    
)

const VideosQuizzesBox = () => (
    
    <div className="featbox__container">
        <h1 className="featbox__title">
        Customized Videos and Quizzes</h1>
        <div className="featbox__image__videosquizzes"/>
        <h3 className="featbox__text">
            Our videos and interactive quizzes are customized to make them fun, fresh, and informative. Ditch those boring lecures at learn at the CyberDocet!
         </h3>
    </div>
    
)

const NewContentBox = () => (
    
    <div className="featbox__container">
        <h1 className="featbox__title">
        Weekly Content </h1>
        <div className="featbox__image__code"/>
        <h3 className="featbox__text">
            We are constantly upgrading CyberDocet with new tools, features, curriculum and more. Check back to see the new us each week!
        </h3>
    </div>
    
)

const FreeBox = () => (
    
    <div className="featbox__container">
        <h1 className="featbox__title">
        No Cost </h1>
        <div className="featbox__image__free"/>
        <h3 className="featbox__text">
            As we get the machine running, CyberDocet is 100% free of charge. Use it if you'd like and let us know what you think.
        </h3>
    </div>
    
)

// -PmPyALVBJU
{/* <Youtube
    videoId={this.state.id}
    opts={opts}
/> */}

{/* <div className="video__page__container">
<div className="video__container">
    <div className="video">
    <Youtube    
        videoId={this.state.id}
        opts={opts}
    />
    </div>

</div>

</div> */}