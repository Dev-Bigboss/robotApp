import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//props come out of state STATE >> PROPS

class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
    //fetch('url')
    //.then(response => response.json())
    //.then(users => this.setState({robots: users})); 
    //thus removing the line afterwards
        this.setState({ robots: robots})
    }

     onSearchChange = (event) => {
         this.setState({ searchfield: event.target.value })
        
        
    }
    render(){
        const {robots, searchfield} =this.state;
        const filteredPlayers = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (!robots.length) ?
        <h1>Loading bro!</h1>:
        
           
         (
                <div className='tc'>
                    <h1 className='f1'>Arsenal first team players</h1>
                    <SearchBox searchChange = {this. onSearchChange} />
                    <Scroll>
                        <CardList robots=   {filteredPlayers}/>
                    </Scroll>
                </div>
            );
        
    }
}
export default App; 