import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AddImage from './AddImage';

export default class List extends PureComponent {
   
    static propTypes = {
      bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }


    render() {
      const { addImage, removeImage } = this.props;
      return (
        <div className="list-view">
          <table>
            <tbody>
              {this.props.bunnies.map((bunny, index) => {
                return (
                  <tr key={index}>
                    <td><a href={bunny.url}>{bunny.title}</a></td>
                    <td>{bunny.description}</td>
                    <td> <input type="button" data-value={bunny.id} value="remove" onClick={({ target }) => removeImage(target.dataset.value)}/></td>
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