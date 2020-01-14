import React, { Component } from 'react'; // React is needed to write JSX!!! i.e the html code seen in the function below!! NB!!!!!!!!!
import SearchBox from './SearchBox';
import CardList from './CardList'; 
import './App.css'; 


class App extends Component {
    constructor(){
        super(); // reminder: super() calls the constructor of component and so this.state can be used
        this.state = {
            robots: [] ,
            searchfield: ''
        }
    }

    componentDidMount() {
        //http fetch and  convert the response string to json
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots: users})});    
    }

    onSearchChange = (event) =>  {
        this.setState({ searchfield : event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return(
                <h1 className='tc'>LOADING</h1>
            );
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    {/* note that onSearchChange has no brackets when calling the function */}
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots }/> 
                </div>
            );
        }
    } 
}

export default App;