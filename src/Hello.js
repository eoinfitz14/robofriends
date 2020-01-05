import React, { Component } from 'react';
import App from './App';
import './Hello.css'

class Hello extends Component{

    render(){
        return (
            //can't use the keyword 'class' like in html as it's already reserved in js
            //className is used instead. Note that this is js/react using a virtual dom to allow us to write html 
            <div className='f1 tc'> 
                <h1>Hello World</h1>
                 <p>{this.props.greeting}</p>
            </div>
        )
        
        
    }
}

export default Hello;