import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles/List.css';

export default class List extends PureComponent {
  render() {
    const { 
      images
    } = this.props;

    const imgTable = images.map((image, i) => {
      return (
        <tr key={i}>
          <th>{image.title}</th>
          <td>{image.url}</td>
          <td>{image.description}</td>
        </tr>
      );
    });

    return (
      <table className="List">
        {imgTable}
      </table>
    );
  }
}

List.propTypes = {
  images: PropTypes.array
};