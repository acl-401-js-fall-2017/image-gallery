import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Bunnies from '../images/bunnies';

export default class Gallery extends PureComponent {

    static propTypes = {
      bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    constructor(){
      super();
      this.state = {
        bunnies: Bunnies,
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
      const bunny = this.props.bunnies[this.state.picIndex];

      return (
        <div className="gallery">
          <img src={bunny.url} alt={bunny.title} height="100px"/>
          <h4>{bunny.title}</h4>
          <h6>{bunny.description}</h6>

          {this.state.picIndex !== 0 && (
            <button type="button" value="Previous" id="prevButton" onClick={this.nextImage}>
          Previous
            </button>
          )}

          {this.state.picIndex !== this.state.bunnies.length - 1  && (
            <button type="button" value="Next" id="nextButton" onClick={this.nextImage}>
          Next
            </button>
          )}
          {/* Might want to add remove button here */}
        </div>
      );
    }
}