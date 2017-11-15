import React, { PureComponent } from 'react';
import './styles/Thumbnails.css';

export default class Thumbnails extends PureComponent {
  render() {
    const { 
      imageData
    } = this.props;
    return (
      <section className="Thumbnails">
        Thumbnails!
      </section>
    );
  }
}