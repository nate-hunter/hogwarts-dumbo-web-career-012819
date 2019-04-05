import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import Sort from './Sort';

class App extends Component {

  state = {
    bossHawgs: [],
    filters: {
      type: 'all'
    }
  };

  componentDidMount() {
    this.setState({
      bossHawgs: hogs
    })
  };

  hawgSorter = (event) => {
    const filterType = this.state.filters.type

    if (filterType === "greased") {
      const greasedHawgs = hogs.filter(hawg => hawg.greased)
      this.setState({
        bossHawgs: greasedHawgs
      })
    } else if (filterType === "weight") {
      const chunkyHawgs = hogs.sort((a, b) => a.weightRatio > b.weightRatio ? -1 : 1)
      this.setState({
        bossHawgs: chunkyHawgs
      })
    } else if (filterType === "name") {
      const namedHawgs = hogs.sort((a, b) => a.name > b.name ? 1 : -1)
      this.setState({
        bossHawgs: namedHawgs
      })
    } else {
      this.setState({
        bossHawgs: hogs
      })
    }
  };

  handleSortClick = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.id
      }
    }, () => {this.hawgSorter()})
  };

  render() {
    return (
      <div className="App">
          < Nav />
          < Sort handleSortClick={this.handleSortClick} />
          < HogContainer bossHawgs={this.state.bossHawgs} />
      </div>
    )
  }
}

export default App;
