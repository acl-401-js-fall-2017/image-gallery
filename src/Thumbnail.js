import React, { Component } from 'react';

export default class Thumbnail extends Component {
  render() {
    const { imageData } = this.props;
    return(
      <ul className="thumnailDisplay">
        {imageData.map((image, i) => {
          return (
            <li key={i}>
              <img className="thumbnail" alt={image.description} src={image.url}></img>
              <br/><i>{image.description}</i>
            </li>
          );
        })}
      </ul>
    );
  }
}