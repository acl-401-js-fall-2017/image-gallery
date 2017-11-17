import React, { PureComponent } from 'react';
import images from './images';

export default class Gallery extends PureComponent{
  constructor(){
    super();
    this.state = {
      images,
      imageIndex: 0,
    };
  }

  render() {
    const image = this.state.images[this.state.imageIndex];
    return (
      <div className="gallery">
        <img src={image.url} alt={image.title}/>

      </div>
    );
  }
}