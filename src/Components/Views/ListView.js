import React, { PureComponent } from 'react';
import AddBunny from '../Views/AddBunny';
import PropTypes from 'prop-types';

export default class ListView extends PureComponent {
  render() {
    const { bunnies, handleSubmit, handleDelete } = this.props;
    const images = bunnies.map((bunny, i) => {
      return (
        <tr key={i}>
          <td> <a href={bunny.url}>{bunny.title}:</a> {bunny.description}</td>
          <td> 
            <button className="remove" data-value={bunny._id} onClick={({ target }) => handleDelete(target.dataset.value)}>remove</button>
          </td>
        </tr>
      );
    });
    
    return (
      <div>
        <table>
          <tbody className="images">
            {images} 
          </tbody>
        </table>
        <AddBunny handleSubmit={handleSubmit}/>
        <form onSubmit={handleSubmit}></form>
      </div>
    );
  }
}

ListView.propTypes = {
  handleSubmit: PropTypes.func,
  handleDelete: PropTypes.func,
  bunnies: PropTypes.array
};