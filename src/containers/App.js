import React, { Component } from 'react'; // React is needed to write JSX!!! i.e the html code seen in the function below!! NB!!!!!!!!!
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList'; 
import Scroll from '../components/Scroll';
import './App.css'; 
import '../components/ErrorBoundary';
import ErrorBoundary from '../components/ErrorBoundary';

// container or smart component
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
        // can get rid of this.state at the start of this.state.robots or this.state.searchfield and have:
        // const { robots, searchfield } = this.state
        // check out video 213 around 6 mins ^^^^ 
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
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
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots }/> 
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    } 
}

export default App;