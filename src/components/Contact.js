import React from 'react';

export default class Contact extends React.Component {

    componentWillMount(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render(){
        return(
            <div className="page">
                Contact Us page in progress, sorry! For now please email JTaor96@gmail.com
            </div>
        )
    }
}