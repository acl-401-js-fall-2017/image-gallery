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
      <section>
        Photos!
        <List/>
        <Thumbnails/>
        <Gallery/>
      </section>
    );
  }
}