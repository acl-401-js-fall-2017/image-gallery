import React, { Component } from 'react';

export default class Gallery extends Component {

  render() {
    const { images, imageIndex, changeImage } = this.props;
    return(
      <tbody>
        <button onClick={() => {changeImage(-1);}}>Previous</button>
        <button onClick={() => {changeImage(1);}}>Next</button>
        <h3>{images[imageIndex].title}</h3>
        <img className="galleryImage" alt={images[imageIndex].description} src={images[imageIndex].url}/>
        <p>{images[imageIndex].description}</p>
      </tbody>
    );
  }
}