import React, { Component } from 'react';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

export default class Display extends Component {
  constructor() {
    super();
    this.state = {
      imageData : 
      [{ 
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      },
      { 
        title: 'Bunny2',
        description: 'This isn\'t placeholder text',
        url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
      },
      { 
        title: 'Final Boss',
        description: 'Very Good',
        url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
      }],

      imageView : 'list',
      imageIndex : 0
    };
  }


  changeImage(change) {
    if (change === 1 && this.state.imageIndex === this.state.imageData.length - 1) return;
    if (change === -1 && this.state.imageIndex === 0) return;
    this.setState({ imageIndex : this.state.imageIndex + change });
  }


  render() {
    const { imageData, imageView, imageIndex } = this.state;

    const display = {
      list : <List imageData={imageData}/>,
      thumbnail : <Thumbnail imageData={imageData}/>,
      gallery : <Gallery 
        imageData={imageData}
        imageIndex={imageIndex}
        changeImage={(change) => this.changeImage(change)} />
    };
    
    return (
      <div>
        <select defaultValue={imageView} onChange={({ target }) => this.setState({ imageView : target.value })}>
          <option value="list">List</option>
          <option value="thumbnail">Thumbnails</option>
          <option value="gallery">Gallery</option>
        </select>
        {display[imageView]}
      </div>
    );
    
  }
}