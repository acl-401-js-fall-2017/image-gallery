import React, { Component } from 'react';

export default class Gallery extends Component {

  render() {
    const { images } = this.props;
    let imageIndex = 0;
    
    const changePic = ({ target }) => {
      this.setState((images) => {
        if (target.id === 'prevButton') {
          imageIndex = - 1;
        }
        if (target.id === 'nextButton') {
          imageIndex = + 1;
        }
        return imageIndex ;
      });
    };

    return(
      <section>
        {imageIndex !== 0 && (
          <button id="prevButton" onClick={changePic} >Previous Picture </button>
        )}
        {imageIndex !== images.length && (
          <button id="nextButton" onClick={changePic} >Next Picture </button>
        )}

      </section>
    );
  }
}

// Gallery.propTypes = {
//   imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
// };
