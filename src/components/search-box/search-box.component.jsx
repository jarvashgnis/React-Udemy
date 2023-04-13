import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input className={this.props.className} onChange={this.props.searchFilterHandler} />
      </div>
    );
  }
}

export default SearchBox;