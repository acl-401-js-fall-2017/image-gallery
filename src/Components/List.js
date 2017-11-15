import React, { PureComponent } from 'react';

export default class List extends PureComponent {
  render() {
    const { 
      imageData
    } = this.props;
    return (
      <section className="List">
        List!
      </section>
    );
  }
}