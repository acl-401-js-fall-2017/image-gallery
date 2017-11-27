import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import AddImages from './AddImages';

export default class Table extends Component {
  render() {
    const { images, removeImage, addImage } = this.props;
    return (
      <div>
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
        <AddImages addImage={addImage}/>
      </div>  
    );
  }
}

Table.propTypes = {
  images: PropTypes.array
};