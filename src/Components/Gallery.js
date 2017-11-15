import React, { PureComponent } from 'react';
import GalleryButtons from './GalleryButtons';
import { slide } from '../actions';
import './styles/Gallery.css';

export default class Gallery extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      currentImg: 0,
    };
    this.props = props;
  }

  onSlide = direction => () => {
    const newState = slide(this.state, direction, this.props.images.length);
    this.setState(newState);
  }

  render() {
    const img = this.props.images[this.state.currentImg];

    return (
      <div className="Gallery">
        { img &&
          <div id={img.title} className="imgSlide">
            <img src={img.url} alt={img.title}/>
            <div className='slideInfo'>
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        }
        <GalleryButtons
          onSlide={this.onSlide}
        />
      </div>
    );
  }
}