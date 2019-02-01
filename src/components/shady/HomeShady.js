import React from 'react';

class Shady extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="sh__page">
                <div className="shady__container">
                    <ShadyWords/>
                    <div className="shady"/>
                </div>
            </div>
        )
    }
}

class ShadyWords extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            type: undefined
        }
    }
    
    componentWillMount(){
        var keys = Object.keys(Sayings);
        var rand = keys[ keys.length * Math.random() << 0]
        this.setState({
            type: rand,
            words: Sayings[rand][Math.floor(Math.random()*Sayings[rand].length)]
        })

    }

    

    render(){
        const {type, words} = this.state;
       
        return(
            <div>
                {type === 'questions' ? <Question words={words}/> : <div/>}
                {type === 'links' ? <Link words={words}/> : <div/>}
                {type === 'tips' ? <Tip words={words}/> : <div/>}
            </div>
        )
    }
}

export default Shady;

class Question extends React.Component {
    constructor(props){
        super(props);
        this.sendAlert = this.sendAlert.bind(this);
        this.words = this.props.words;
    }

    sendAlert(){
        alert("Oh no!!!\n Shady just stole all of your personal information... \n I wouldn\'t trust that guy if I was you.")
    }

    render(){
        return(
            <div className="hspeech__bubble">
                <div className="shhady__words"> {this.words}</div>
                <form>
                    <input className="shady__input" type="text" placeholder=""/>
                    <button onClick={this.sendAlert} className="htellshady__button">Tell Shady</button>
                </form>
            </div>
        )
    }
}

class Tip extends React.Component {
    constructor(props){
        super(props);
        this.words = this.props.words;
    }

    render(){
        
        return(
            <div className="hspeech__bubble">
                <div className="hshady__tip">Tip: </div>
                <div className="hshady__words"> {this.words}</div>
            </div>
        )
    }
}

class Link extends React.Component {
    constructor(props){
        super(props);
        this.sendAlert = this.sendAlert.bind(this);
        this.words = this.props.words;
    }

    sendAlert(){
        alert("Oh no!!!\n Shady just stole all of your personal information... \n I wouldn\'t trust that guy if I was you.")
    }

    render(){
        return(
            <div className="hspeech__bubble">
                <div className="hshady__words"> {this.words}</div>
                <form>
                    <button onClick={this.sendAlert} className="htellshady__button">Here!</button>
                </form>
            </div>
        )
    }
}

const Sayings = {
    questions: ['Your mother and I were just talking and she forgets her maiden name, can you tell me so I can remind her?', 
    'What\’s your favorite combination of numbers, mine is 3212',
    'I just won the lottery! What’s your bank account number so I can give you some money!',
    'Want to split a timeshare? All I need is your social security number!',
    'What city were you born in? I\'m from Badgerville',
    'Trouble remembering passwords? Tell it to me and I will remember it for you!'
    ],
    tips: ['Use the same password so it’s easier to remember', 
    'If someone offers you free money you should take it',
    'Your social security number is unique… Don\’t be afraid to flaunt yours!',
    'Most strangers are kind and give away free stuff!',
    'Proud of your new credit card? Post a picture of it on social media to show off to all of your friends',
    'The safest password to use it 1234 because nobody would expect it',
    'Click every link you see… you might learn something new!',
    'If you’re on vacation somewhere expensive, post a picture of yourself with your passport so everyone believes you'
    ],
    links: ['Claim your free prize', 'Check out this picture you\'re in!']
}