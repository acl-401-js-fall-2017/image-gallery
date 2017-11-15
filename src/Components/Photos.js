import React, { PureComponent } from 'react';
import PhotoDisplaySelector from './PhotoDisplaySelector';
import ImageManager from './ImageManager';
import List from './List';
import Thumbnails from './Thumbnails';
import Gallery from './Gallery';

import {
  loadImages,
  addNewImg,
  removeImages
} from '../actions';
import './styles/Photos.css';

export default class Photos extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    const newState = loadImages(this.state);
    this.setState(newState);
  }

  handleUpload = newImg => {
    const newState = addNewImg(this.state, newImg);
    this.setState(newState);
  }

  handleRemove = imgs => {
    const newState = removeImages(this.state, imgs);
    this.setState(newState);
  }
  
  render() {
    const { display, handleDisplayChange } = this.props;
    const { images } = this.state;
    return (
      <section className="Photos">
        <header className="PhotosHeader">
          <h2>Photos</h2>
          <div className="PhotoUtils">
            <PhotoDisplaySelector
              onDisplayChange={handleDisplayChange}
            />
            <ImageManager
              images={images}
              onUpload={this.handleUpload}
              onRemove={this.handleRemove}
            />
          </div>
        </header>
        {display === 'list'       &&  <List images={images}/>}
        {display === 'thumbnails' &&  <Thumbnails images={images}/>}
        {display === 'gallery'    &&  <Gallery images={images}/>}
      </section>
    );
  }
}