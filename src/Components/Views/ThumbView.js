import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ThumbView extends PureComponent {
  render() {
    const { bunnies, handleDelete } = this.props;

    return (
      <div>
        {bunnies.map((bunny, i) => {
          return (
            <div>
              <li key={i}>
                <figcaption><a href={bunny.url}>{bunny.title}:</a></figcaption>
                <img src={bunny.url} alt="" height="25%" width="25%"/>
                <button className="remove" data-value={bunny._id} onClick={({ target }) => handleDelete(target.dataset.value)}>remove</button>
              </li>
            </div>
          );
        })}
      </div>
    );
  }
}

ThumbView.propTypes = {
  bunnies: PropTypes.array
};