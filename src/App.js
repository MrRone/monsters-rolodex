import React, {
  Component
} from 'react';
import './App.css';
import {
  CardList
} from './components/card-list/card-list.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange(e){
    this.setState({ searchField: e.target.value });
    console.log(e.target.value);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return ( 
      <div className='App' >
        <input 
          type='search' 
          placeholder='Search monsters...' 
          onChange={this.handleSearchChange}/>
        <CardList monsters={this.state.monsters }/> 
      </div>
    )
  }
}

export default App;