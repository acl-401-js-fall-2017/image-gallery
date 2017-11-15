import React, { PureComponent } from 'react';
import './styles/Gallery.css';

export default class Gallery extends PureComponent {
  render() {
    const { 
      images
    } = this.props;
    return (
      <section className="Gallery">
        Gallery!
      </section>
    );
  }
}