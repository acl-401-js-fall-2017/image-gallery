import React, { Component } from 'react';

export default class ImageThumbnail extends Component {
  
  render() {
    const { images, onDelete } = this.props;

    return (
      <div id="thumbnail-view">
        {images.map((image) => (
          <div className="flexy" key={image._id} >
            <img style={{ height:'200px' }} src={image.url} alt={image.title}/>
            <button onClick={() => onDelete(image)}>remove</button>
          </div>
        ))}
      </div>
    );
  }
}

