import React, { Component } from 'react';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
// import shortid from 'shortid';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import { Route } from 'react-router-dom';

import { loadImages, addImage, removeImage } from './images/images.actions';
import imageApi from './services/image-api';

import { loadAlbums } from './albums/albums.actions';
import albumApi from './services/album-api';


export default class Display extends Component {
  constructor() {
    super();
    this.state = {
      imageData: [],
      // [{ 
      //   _id: shortid.generate(),
      //   title: 'Cute Bunny',
      //   description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
      //   url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      // },
      // { 
      //   _id: shortid.generate(),
      //   title: 'Bunny2',
      //   description: 'This isn\'t placeholder text',
      //   url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
      // },
      // { 
      //   _id: shortid.generate(),
      //   title: 'Final Boss',
      //   description: 'Very Good',
      //   url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
      // }],

      // imageView: 'list',
      imageIndex: 0,
      albums: []
    };
  }

  async componentDidMount() {
    const imageData = await imageApi.get();
    let newState = loadImages(this.state, imageData);
    this.setState(newState);

    const albumData = await albumApi.get();
    newState = loadAlbums(this.state, albumData);
    this.setState(newState);
    console.log('newState is', newState);
    
  }

  changeImage(change) {
    if (change === 1 && this.state.imageIndex === this.state.imageData.length - 1) return;
    if (change === -1 && this.state.imageIndex === 0) return;
    this.setState({ imageIndex: this.state.imageIndex + change });
  }

  async addImg(newImage) {
    const newImageData = await imageApi.add(newImage);
    const newState = addImage(this.state, newImageData);
    this.setState(newState);
  }

  async removeImg(unwantedImage) {
    const newImageData = await imageApi.remove(unwantedImage);
    const newState = removeImage(this.state, newImageData);
    this.setState(newState);
  }

  render() {
    const { imageData, imageIndex } = this.state;

    const display = {
      list: <List imageData={imageData} 
        add={img => this.addImg(img)}
        remove={img => this.removeImg(img)}/>,

      thumbnail: <Thumbnail imageData={imageData}/>,

      gallery: <Gallery 
        imageData={imageData}
        imageIndex={imageIndex}
        changeImage={(change) => this.changeImage(change)}/>
    };

    return (
      <div className="section">
        <div>
          <Route exact path="/" render={() => display.list}/>
          <Route path="/thumbnail" render={() => display.thumbnail}/>
          <Route path="/gallery" render={() => display.gallery}/>
        </div>
        
        {/* <select defaultValue={imageView} onChange={({ target }) => this.setState({ imageView: target.value })}>
          <option value="list">List</option>
          <option value="thumbnail">Thumbnails</option>
          <option value="gallery">Gallery</option>
        </select> */}

      </div>
    );
    
  }
}

Display.propTypes = {
  imageData: PropTypes.array,
  imageView: PropTypes.string,
  imageIndex: PropTypes.number
};