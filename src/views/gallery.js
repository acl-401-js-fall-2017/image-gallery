import React, { Component } from 'react';

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      slideIndex: 0,
      images: this.props.images
    });
  }
  
 
  slideImg(n) {
    const { images, slideIndex } = this.state;
    const max = images.length - 1;
    const currIndex = slideIndex;
    let newIndex = slideIndex + n;

    if (currIndex === max && n=== 1) newIndex = 0;
    if (currIndex === 0 && n === -1) newIndex = max;

    this.setState({ slideIndex: newIndex });
  }
  
  render() {
    const { images } = this.props;
    const imageArray =  images.map((image) => (
      <div key={image._id} >
        <img style={{ height:'600px' }} src={image.url} alt={image.title} />
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