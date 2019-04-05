import React, { Component } from 'react'

class Sort extends Component {




  render() {
    return(
      <div className="sort" onClick={this.props.handleSortClick}>
        <button id="all">View All</button>
        <button id="name">Sort by Name</button>
        <button id="weight">Sort by Weight</button>
        <button id="greased">Greased? Yay or Nay</button>
      </div>
    )
  }
};

export default Sort;
