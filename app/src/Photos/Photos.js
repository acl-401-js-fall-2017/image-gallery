import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
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
import photosApi from '../services/photo-api';
import './styles/Photos.css';

export default class Photos extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      images: [],
    };
  }

  async componentDidMount() {
    const photos = await photosApi.get();
    const newState = loadImages(this.state, photos);
    this.setState(newState);
  }

  handleUpload = newImg => {
    photosApi.add(newImg);
    const newState = addNewImg(this.state, newImg);
    this.setState(newState);
  }

  handleRemove = imgs => {
    console.log(imgs);
    photosApi.remove(imgs);
    const newState = removeImages(this.state, imgs);
    this.setState(newState);
  }
  
  render() {
    const { match, handleDisplayChange } = this.props;
    const { images } = this.state;
    return (
      <section className="Photos">
        <header className="PhotosHeader">
          <h2>Photos</h2>
          <div className="PhotoUtils">
            <PhotoDisplaySelector
              onDisplayChange={handleDisplayChange}
              match={match}
            />
            <ImageManager
              images={images}
              onUpload={this.handleUpload}
              onRemove={this.handleRemove}
            />
          </div>
        </header>
        <Route path={`${match.url}/thumbnails`} render={() => (
          <Thumbnails images={images}/>
        )}/>
        <Route path={`${match.url}/gallery`} render={({ match }) => (
          <Gallery images={images} match={match}/>
        )}/>
        <Route path={`${match.url}/list`} render={() => (
          <List images={images}/>
        )}/>
        <Redirect to={`${match.url}/list`}/>
      </section>
    );
  }
}