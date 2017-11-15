import React, { PureComponent } from 'react';
import List from './List';
import Thumbnails from './Thumbnails';
import Gallery from './Gallery';

export default class Photos extends PureComponent {
  render() {
    const { 
      images,
      display
    } = this.props;
    return (
      <section className="Photos">
        Photos!
        {display === 'list' && <List images={images}/>}
        {display === 'thumbnail' && <Thumbnails images={images}/>}
        {display === 'gallery' && <Gallery images={images}/>}
      </section>
    );
  }
}