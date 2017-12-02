import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class GalleryView extends PureComponent {
  constructor() {
    super();
    this.state = {
      i: 0,
    };
  }

  handleIndexChange(value, bunnies) {
    this.setState((prevState) => {
      const isFinalIndex = prevState.i === bunnies.length -1;
      const isFirstIndex = prevState.i === 0;
      let i = value === 'Next' ? 
        (
          isFinalIndex ? 0 : prevState.i+1
        ) : (
          
          isFirstIndex ? bunnies.length-1 : prevState.i-1
        );
      const state = { i }; 
      return state;
    });
  }

  render() {
    const { bunnies, handleDelete } = this.props;
    const bunny = bunnies[this.state.i];
    const currentImage =  
        (<div>
          <img src={bunny.url} alt="" width="40%"/>
          <p>{bunny.title}</p>
        </div>);

    return (
      <div>
        {currentImage}
        <input type="button" value="Previous" onClick={(event) => this.handleIndexChange(event.target.value, bunnies)}/>
        <input type="button" value="Next" onClick={(event) => this.handleIndexChange(event.target.value, bunnies)}/>
        <button className="remove" data-value={bunny._id} onClick={({ target }) => handleDelete(target.dataset.value)}>remove</button>
      </div>
    );
  }
}

GalleryView.propTypes = {
  bunnies: PropTypes.array,
  i: PropTypes.number
};