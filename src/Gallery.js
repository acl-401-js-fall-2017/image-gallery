import React, { Component } from 'react';

export default class Gallery extends Component {

  render() {
    const { imageData, imageIndex, changeImage } = this.props;

    return(
      <div>
        <button onClick={() => {changeImage(-1);}}>Previous</button>
        <button onClick={() => {changeImage(1);}}>Next</button>
        <h3>{imageData[imageIndex].title}</h3>
        <img className="galleryImage" alt={imageData[imageIndex].description} src={imageData[imageIndex].url}/>
        <p>{imageData[imageIndex].description}</p>
      </div>
    );
  }
}