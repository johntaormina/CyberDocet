import React from 'react';

export default class Contact extends React.Component {
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSend: false,
            error: null
        }
    }


    componentWillMount(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    handleFormSubmit( event ) {
        event.preventDefault();
    }

    render(){
        return(
            <div className="page">
            <div className="contact__container">
                 <form action="https://formspree.io/jtaor96@gmail.com" method="POST">

                    <label>First Name</label>
                    <input className="contact__input" 
                    type="text" 
                    id="fname" 
                    name="firstname" 
                    placeholder="Your name.."
                    value={this.state.fname}
                    onChange={e => this.setState({ fname: e.target.value })} 

                    />

                    <label>Last Name</label>
                    <input className="contact__input" 
                    type="text" 
                    id="lname" 
                    name="lastname" 
                    placeholder="Your last name.." 
                    value={this.state.lname}
                    onChange={e => this.setState({ lname: e.target.value })}
                    />


                    <label>Email</label>
                    <input className="contact__input" 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })} 
                    />


                    <label>Message</label>
                    <textarea className="contact__input" 
                    id="message" 
                    name="message" 
                    placeholder="Write something.."
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                    >
                    </textarea>

                    <input className="contact__submit" 
                    type="submit" 
                    value="Send"
                    />

                </form>
            </div>
            </div>
        )
    }
}

const API_PATH = 'http://localhost:8080/index';
