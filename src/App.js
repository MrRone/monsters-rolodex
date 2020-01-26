import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
    console.log(e.target.value);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(m => 
      m.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    
    return ( 
      <div className='App' >
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder={'Search monsters...'} handleSearchChange={this.handleSearchChange}/>  
        <CardList monsters={ filteredMonsters }/> 
      </div>
    )
  }
}

export default App;