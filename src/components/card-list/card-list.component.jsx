import React, { Component } from 'react';

class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.listItems.map((user) => (
          <h1 key={user.name}>{user.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;