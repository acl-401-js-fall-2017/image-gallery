import React, { Component } from 'react';
import Item from './Item';

class Table extends Component {
  render() {
    const { images } = this.props;
    return (
      <table>
        <tr>
          <th>Title</th>
          <th>Link</th>
          <th>Description</th>
        </tr>
        {images.map(image => <Item image={image}/>)}
      </table>
    );
  }
}