import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PhotoDisplaySelector extends PureComponent {
  render() {
    const { onDisplayChange } = this.props;
    return(
      <select
        defaultValue=''
        onChange={e => {
          e.preventDefault();
          onDisplayChange(e.target.value);
        }}
      >
        <option disabled value=''>View Mode</option>
        <option value="list">list</option>
        <option value="thumbnails">thumbnails</option>
        <option value="gallery">gallery</option>
      </select>
    );
  }
}

PhotoDisplaySelector.propTypes = {
  onDisplayChange: PropTypes.func
};