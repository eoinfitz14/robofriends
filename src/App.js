import React, { Component } from 'react'; // React is needed to write JSX!!! i.e the html code seen in the function below!! NB!!!!!!!!!
import SearchBox from './SearchBox';
import CardList from './CardList'; 
import { robots } from './robots';



class App extends Component {
    constructor(){
        super(); // reminder: super() calls the constructor of component and so this.state can be used
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log(event);
    }

    render(){
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange()}/>
                <CardList robots={this.state.robots }/> 
            </div>
        );
    } 
}

export default App;