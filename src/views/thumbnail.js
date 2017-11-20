import React, { Component } from 'react';

export default class ImageThumbnail extends Component {
  
  render() {
    const { images, onDelete } = this.props;

    return (
      <div className="home" id="thumbnail-view">
        {images.map((image) => (
          <div key={image._id} >
            <img style={{ height:'200px' }} src={image.url} alt={image.title}/>
            <p>{image.title}</p>
            <button onClick={() => onDelete(image)}>remove</button>
          </div>
        ))}
      </div>
    );
  }
}

