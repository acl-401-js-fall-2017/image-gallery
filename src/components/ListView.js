import React, { Component } from 'react';

export default class List extends Component {

  render() {
    const { images } = this.props;
    return(
      <section>
        <ul>
          {images.map((image) => {
            return (
              <li key={image._id}> {image.title} < a href={image.url} >
                {image.url}</a></li>);
          })}
        </ul>   
      </section>
    );
  }
}
