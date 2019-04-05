import React, { Component } from 'react';
import Hog from './Hog';

class HogContainer extends Component {



  randomGif = () => {
    const randomHawgGif = "http://api.giphy.com/v1/gifs/random?&api_key=ALxfIZtyKtnS3FYBjJQZ7swvsLGDq6Di&tag=hog"
    const hawgSearch = "http://api.giphy.com/v1/gifs/search?&api_key=ALxfIZtyKtnS3FYBjJQZ7swvsLGDq6Di&q=hog&limit=3"

    return fetch(randomHawgGif)
    .then(resp => resp.json())
    .then(imgObj => {
      console.log(imgObj)
    })
  }

  render() {
    const getHawgImages = (name) => {
      let imgName = name.toLowerCase().split(" ").join("_");
      return require(`../hog-imgs/${imgName}.jpg`);
    }

    const allDaHawgs = this.props.bossHawgs.map(hawg => {
      return( < Hog {...hawg} hawgImg={getHawgImages(hawg.name)}/> )
    })

    return(
      <div className="ui grid container">
        {allDaHawgs}
      </div>
    )
  }


};

export default HogContainer;
