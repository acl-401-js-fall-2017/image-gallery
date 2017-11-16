import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class List extends PureComponent {
   
    static propTypes = {
      bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }


    render() {
      const { addImage, removeImage, bunnies } = this.props;
      return (
        
        <table className='list'>
          <tbody>
            {this.props.bunnies.map((bunny, index) => {
              return (
                <tr key={index}>
                  <td><a href={bunny.url}>{bunny.title}</a></td>
                  <td>{bunny.description}</td>
                  <td> <input type="button" data-value={bunny._id} value="remove" onClick={({ target }) => removeImage(target.dataset.value)}/></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
}