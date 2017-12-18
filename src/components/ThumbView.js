import React, { Component } from 'react';

export default class Thumb extends Component {

  render() {
    const { images, onDelete } = this.props;
    return(
      <section>
        <ul>
          {images.map((image) => {
            return (
              <li key={image._id}> {image.title} <button onClick={() => onDelete(image._id)}>X</button>
                <img className="thumb" src={image.url} alt="panda" />
              </li>);
          })}
        </ul>   
      </section>
    );
  }
}
