import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Bunnies from '../images/bunnies';



export default class Gallery extends Component {

    static propTypes = {
      images: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    constructor(){
      super();
      this.state = {
        picIndex: 0
      };
    }


    nextImage = ({ target }) => {
      this.setState(prevState => {
        let picIndex;
        if (target.id === 'prevButton') {
          picIndex = prevState.picIndex - 1;
        }
        if (target.id === 'nextButton') {
          picIndex = prevState.picIndex + 1;
        }
        return { picIndex };
      });
    }


    render() {
      if(this.props.images.length < 1) return null;
      
      const image = this.props.images[this.state.picIndex];
      return (
        <div className="gallery">
          <img src={image.url} alt={image.title} height="100px"/>
          <h4>{image.title}</h4>
          <h6>{image.description}</h6>

          {this.state.picIndex !== 0 && (
            <button type="button" value="Previous" id="prevButton" onClick={this.nextImage}>
          Previous
            </button>
          )}

          {this.state.picIndex !== this.props.images.length - 1  && (
            <button type="button" value="Next" id="nextButton" onClick={this.nextImage}>
          Next
            </button>
          )}
        </div>
      );
    }
}