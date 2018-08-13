import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        // runs AFTER the render function
        // fetch from json placeholder
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) 
        }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
        <div><h2>Assembling robots...</h2></div>:
        (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
        );
    }
}
export default App;