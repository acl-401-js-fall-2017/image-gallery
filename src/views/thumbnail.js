import React, { Component } from 'react';

export default class ImageThumbnail extends Component {
  
  render() {
    const { images } = this.props;

    return (
      <div className="thumbnail-view">
        {images.map((image) => (
          <div key={image._id} >
            <img style={{ height:'200px' }} src={image.url} alt={image.title}/>
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

