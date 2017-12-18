import React, { Component } from 'react';

export default class List extends Component {

  render() {
    const { images, onDelete } = this.props;
    return(
      <section>
        <ul>
          {images.map((image) => {
            return (
              <li key={image._id}> {image.title} <button onClick={() => onDelete(image._id)}>X</button>
                < a href={image.url} >
                  {image.url}</a>
              </li>);
          })}
        </ul>   
      </section>
    );
  }
}
