import React, { PureComponent } from 'react';
import images from '../images';

export default class Gallery extends PureComponent{
  constructor(){
    super();
    this.state = {
      images,
      imageIndex: 0,
    };
  }
  changeImage = ({ target }) => {
    this.setState(prevState => {
      let imageIndex;
      if (target.id === 'prevButton') {
        imageIndex = prevState.imageIndex - 1;
      }
      if (target.id === 'nextButton') {
        imageIndex = prevState.imageIndex + 1;
      }
      return { imageIndex };
    });
  };

  render() {
    const image = this.state.images[this.state.imageIndex];
    return (
      <div className="gallery">
        <img src={image.url} alt={image.title} height="300px"/>
        <h3>{image.title}</h3>
        <h6>{image.description}</h6>

        {this.state.picIndex !== 0 && (
          <button type="button" value="Previous" id="prevButton" onClick={this.changeImage}>
          Previous
          </button>
        )}

        {this.state.picIndex !== this.state.images.length - 1  && (
          <button type="button" value="Next" id="nextButton" onClick={this.changeImage}>
          Next
          </button>
        )}
      </div>
    );
  }
}