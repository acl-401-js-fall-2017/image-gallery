import React, { PureComponent } from 'react';

export default class Gallery extends PureComponent {
  render() {
    const { 
      imageData
    } = this.props;
    return (
      <section>
        Gallery!
      </section>
    );
  }
}