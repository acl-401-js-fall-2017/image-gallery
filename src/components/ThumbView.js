import React, { Component } from 'react';

export default class Thumb extends Component {

  render() {
    const { images } = this.props;
    return(
      <section>
        <ul>
          {images.map((image) => {
            return (
              <li key={image._id}> {image.title} <img className="thumb" src={image.url} />
              </li>);
          })}
        </ul>   
      </section>
    );
  }
}
