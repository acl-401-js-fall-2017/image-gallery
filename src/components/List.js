import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddImage from './AddImage';

export default class List extends Component {
   
    static propTypes = {
      images: PropTypes.arrayOf(PropTypes.object).isRequired
    }


    render() {
      const { addImage, handleRemove } = this.props;
      return (
        <div className="list-view">
          <table>
            <tbody>
              {this.props.images.map((image, index) => {
                return (
                  <tr key={index}>
                    <td><a href={image.url}>{image.title}</a></td>
                    <td>{image.description}</td>
                    <td> <input type="button" data-value={image._id} value="remove" onClick={() => handleRemove(image._id)}/></td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td><AddImage addImage={newImage => addImage(newImage)}/></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
}