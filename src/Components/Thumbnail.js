import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

export default class Thumbnail extends PureComponent {
  render () {
    const { images } = this.props;
    return (
      <div className="thumbnail">
        {images.map((image, i) => {
          return (
            <div key={i}>
              <h3>{image.title}</h3>
              <img src={image.url} alt={image.title} height="100px"/>
            </div>
          );
        })}
      </div>
    );
  } 
}

Thumbnail.propTypes = {
  images: PropTypes.array
};