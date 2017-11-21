import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { removeImage } from '../Actions/image.actions';

export default class Table extends PureComponent {
  render() {
    const { images } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          {images.map((image, i) => {
           
            return (
              <tr className="table-row" key={i}>
                <td><a href={image.url}>{image.title}</a></td>
                <td>{image.description}</td>
                <td>
                  <button onClick={() => removeImage(image._id)}> Remove </button>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  images: PropTypes.array
};