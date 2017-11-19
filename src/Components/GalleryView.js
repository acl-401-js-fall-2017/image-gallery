import React, { PureComponent } from 'react';

export default class GalleryView extends PureComponent {
  constructor() {
    super();
    this.state = {
      i: 0,
    };
  }

  handleIndexChange(value, bunnies) {
    this.setState((prevState) => {
      const forwardRound = prevState.i === bunnies.length -1;
      let i = value === 'Next' ? prevState.i+1 : prevState.i-1;
      // let k = value === 'Previous' ? prevState.k-1 : prevState.k+1;
      const state = forwardRound ? { i: 0 } : { i }; 
      return state;
    });
  }

  render() {
    const { bunnies } = this.props;
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
      </div>
    );
  }
}