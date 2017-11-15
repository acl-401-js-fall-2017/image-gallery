import React, { PureComponent } from 'react';
import './styles/List.css';

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