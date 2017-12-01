import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Thumbnail extends PureComponent {
    
    static propTypes = {
      images: PropTypes.arrayOf(PropTypes.object).isRequired
    }


    render() {
      return (
        <div className="thumbnail">
          {this.props.images.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.url} alt={image.title} height="100px"/>
                <h4>{image.title}</h4>
                <h6>{image.description}</h6>
              </div>
            );
          })}
        </div>
      );
    }
}