import React, { Component } from 'react';

export default class WonderGallery extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      slideIndex: 0,
      wonders: this.props.wonders
    });
  }
  
 
  slideImg(n) {
    const { wonders, slideIndex } = this.state;
    const max = wonders.length - 1;
    const currIndex = slideIndex;
    let newIndex = slideIndex + n;

    if (currIndex === max && n=== 1) newIndex = 0;
    if (currIndex === 0 && n === -1) newIndex = max;

    this.setState({ slideIndex: newIndex });
  }
  
  render() {
    const { wonders } = this.props;
    const imageArray =  wonders.map((wonder) => (
      <div key={wonder._id} >
        <img style={{ height:'600px' }} src={wonder.url} alt={wonder.title} />
      </div>
    ));
      
      
    return (
      <div className="thumbnail-view">
        {imageArray[this.state.slideIndex]}
        <div>
          <button onClick={() => this.slideImg(-1)}>backward</button>
          <button onClick={() => this.slideImg(1)}>forward</button>
        </div>
      </div>


    );
  }
}