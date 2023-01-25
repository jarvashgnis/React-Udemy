import './App.css';
import React, { Component } from 'react';

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
    const filteredUserArray = this.state.users.filter((user) => user.name.toLowerCase().includes(this.state.searchValue));
    return (
      <div className="App">
        <input onChange={this.searchedNameFilter} />
        {filteredUserArray.map((user) => (
          <h1 key={user.name}>{user.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
