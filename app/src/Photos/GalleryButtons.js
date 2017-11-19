import React, { PureComponent } from 'react';

export default class GalleryButtons extends PureComponent {
  render() {
    const { onSlide } = this.props;
    return (
      <div className="galleryButtons">
        <h1 
          className="galleryBack"
          onClick={onSlide('back')}
        > {'<'} </h1>
        <h1 
          className="galleryForward"
          onClick={onSlide('forward')}
        > > </h1>
      </div>
    );
  }
}