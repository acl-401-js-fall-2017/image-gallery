import React, { Component } from 'react';
import AddImage from './AddImage';

export default class List extends Component {
  render() {
    const { images, handleAdd, handleRemove } = this.props;
    return(
      <tbody>
        
        {images.map((image, i) => {
          return (
            <tr key={i}>
              <td><a href={image.url}>{image.title}</a></td>
              <td>{image.description}</td>
              <td><button onClick={() => handleRemove(image)}> Remove </button></td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td><AddImage add={newImage => handleAdd(newImage)}/></td>
          <td></td>
        </tr>

      </tbody>
    );
  }
}