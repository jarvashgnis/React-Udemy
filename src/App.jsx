import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchValue: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchedNameFilter = (e) => this.setState({ searchValue: e.target.value.toLowerCase() });

  render() {
    const filteredUserArray = this.state.users.filter((user) => (
      user.name.toLowerCase().includes(this.state.searchValue)));
    return (
      <div className="App">
        <input onChange={this.searchedNameFilter} />
        <CardList listItems={filteredUserArray} />
      </div>
    );
  }
}

export default App;
