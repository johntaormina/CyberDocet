import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render(){
        return(
            <div className="footer__container">

                <div>
                    <h1 className="footer__text">
                    CyberDocet
                    </h1>
                </div>
                

                <div>
                    <button
                    onClick={() => this.nextPath('/contact')}
                    className="footer__contact">
                    Contact Us
                    </button>
                </div>
                

            </div>
        )
    }
}

export default withRouter(Footer);