import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles/Thumbnails.css';

export default class Thumbnails extends PureComponent {
  render() {
    const { 
      images
    } = this.props;

    const imgThumbnails = images.map((image, i) => (
      <div id={image.title} className="thumbnail" key={i}>
        <img src={image.url} alt={image.title}/>
        <div className='thumbnailPopUp'>
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    ));

    return (
      <section className="Thumbnails">
        {imgThumbnails}
      </section>
    );
  }
}

Thumbnails.propTypes = {
  images: PropTypes.array
};