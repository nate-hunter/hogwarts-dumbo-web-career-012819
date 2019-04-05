import React, { Component } from 'react';

class Hog extends Component {

  state = {
     clicked: false,
     hidden: false
   };

  handleDetailClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      ...this.state.hidden
      })
    };

  handleHideClick = () => {
    this.setState({
      ...this.state.clicked,
      hidden: !this.state.hidden
      })
    };

  addHTML = () => {
    return(
      <div>
        <h3>specialty: {this.props.specialty}</h3>
        <p>Chunky Hawg Ratio to Fridge: {this.props['weightRatio']}</p>
        <p>Highest Medal: {this.props['highest medal achieved']}</p>
      </div>
    )
  };


  render() {

    if (this.state.hidden) {
      return (
        <div className="ui eight wide column">
          <br/>
          <button onClick={this.handleHideClick}>Show {this.props.name}</button>
        </div>
      )
    } else {
      return(
        <div className="ui eight wide column">
          <h1>{this.props.name}</h1>
          <button onClick={this.handleHideClick}>Hide</button>
          <br/>
          <br/>
          <img src={this.props.hawgImg} onClick={this.handleDetailClick}/>
          <p>{this.state.clicked ? this.addHTML() : " "}</p>
          {this.addHTML}
        </div>
      )
    }
  }
};

export default Hog;
