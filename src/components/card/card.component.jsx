import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { item } = this.props
    const { name, email } = item;
    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;