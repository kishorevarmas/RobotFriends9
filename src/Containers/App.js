import React, {Component} from 'react';
// import Cards from './Cards'
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
//import {robots} from './robots';
import  './App.css'
import Scroll from '../Components/Scroll'

class App extends Component {
  constructor() {
    super()
    this.state = {
      Robots:[],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response=> response.json())
    .then(users=> this.setState({Robots:users}))
  }

  onsearch = (event) =>{
    this.setState({searchfield:event.target.value})
  }

  render () {
    const {Robots, searchfield} = this.state;
    const filRobots = Robots.filter(robot=> {
      return (
          robot.name.toLowerCase().includes(searchfield.toLowerCase())
      )
    }
    )

    return !Robots.length?
    <h1 className= 'tc f1'>Loading</h1>:
    (
      <div className = 'tc'>
        <h1 className= 'f1'>Robot Friends</h1>
        <Searchbox srchange= {this.onsearch} />
        <Scroll>
          <Cardlist Robots={filRobots} />
        </Scroll>
      </div>
    )
    
  }
}




export default App;
