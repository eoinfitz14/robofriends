import React, { Component } from 'react'; // React is needed to write JSX!!! i.e the html code seen in the function below!! NB!!!!!!!!!

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    //kind of like a try/catch. Lifecycle hook that's triggered at any error
    componentDidCatch(error, info){
        this.state({ hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <h1>Ooops. That's not good!</h1>
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;