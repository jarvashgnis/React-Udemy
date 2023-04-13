import React, { Component } from 'react';
import Card from '../card/card.component';

class CardList extends Component {
  render() {
    const { list_items } = this.props
    return (
      <div className='card-list'>
        {list_items.map((item) => {
          return <Card key={item.id} item={item} />
        })}
      </div>
    );
  }
}

export default CardList;
