import React, { PureComponent } from 'react';

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