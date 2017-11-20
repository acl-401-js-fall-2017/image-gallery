import React, { Component } from 'react';

export default class ImageList extends Component {
    
  render() {
    const { images, onDelete } = this.props;
  
    return (
      <div className="home" id="list-view">
        {images.map((image) => (
          <div key={image._id} >
            <h2>{image.title}</h2>
            <img style={{ height:'200px' }} src={image.url} alt={image.title}/>
            <p>{image.description}</p>
            <button onClick={() => onDelete(image)}>remove</button>
          </div>
        ))}
      </div>
    );
  
  }
  
}