import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles/Thumbnails.css';

export default class Thumbnails extends PureComponent {

  render() {
    const { images } = this.props;

    return (
      <div className="Thumbnails">
        {images.map((image, i) => (
          <div id={image.title} className="thumbnail" key={i}>
            <img src={image.url} alt={image.title}/>
            <div className='thumbnailPopUp'>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Thumbnails.propTypes = {
  images: PropTypes.array
};