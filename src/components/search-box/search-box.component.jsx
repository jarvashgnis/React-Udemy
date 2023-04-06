import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input className={this.props.className} onChange={this.props.searchFilterHandler} />
    );
  }
}

export default SearchBox;