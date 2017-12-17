import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends Component {

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor() {
    super();
    this.state = {
      imageIndex: 0
    };
  }
  
  changePic = ({ target }) => {
    this.setState((prevState) => {
      let { imageIndex } = prevState;
      if (target.id === 'prevButton') {
        imageIndex -= 1;
      }
      if (target.id === 'nextButton') {
        imageIndex += 1;
      }
      return { imageIndex } ;
    });
  }
  

  render() {
    const { images } = this.props;
    return(
      <div>
        <section>
          {this.state.imageIndex !== 0 && (
            <button id="prevButton" onClick={this.changePic} >Previous Picture </button>
          )}
          {this.state.imageIndex !== (images.length -1) && (
            <button id="nextButton" onClick={this.changePic} >Next Picture </button>
          )}
        </section>
        <section>
          <img className="gallery" src={images[this.state.imageIndex].url} alt="panda" />
        </section>
      </div>
    );
  }
}
