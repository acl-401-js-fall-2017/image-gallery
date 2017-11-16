import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { image } = this.props;
    return (
      <tr className="Item">
        <td>{image.title}</td>
        <td>{image.description}</td>
        <td>{image.url}</td>
      </tr>
    );
  }
}