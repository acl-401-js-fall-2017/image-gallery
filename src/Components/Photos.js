import React, { PureComponent } from 'react';
import PhotoDisplaySelector from './PhotoDisplaySelector';
import List from './List';
import Thumbnails from './Thumbnails';
import Gallery from './Gallery';
import './styles/Photos.css';

export default class Photos extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      images: [],
    };
  }

  /* onDisplayChange={({ target: { value } }) => handleDisplayChange(value)} */
  render() {
    const { display, handleDisplayChange } = this.props;
    const { images } = this.state;
    return (
      <section className="Photos">
        <header className="PhotosHeader">
          <h2>Photos</h2>
          <PhotoDisplaySelector
            onDisplayChange={handleDisplayChange}
          />
        </header>
        {display === 'list'       &&  <List images={images}/>}
        {display === 'thumbnails' &&  <Thumbnails images={images}/>}
        {display === 'gallery'    &&  <Gallery images={images}/>}
      </section>
    );
  }
}