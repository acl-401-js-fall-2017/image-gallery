import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class PhotoDisplaySelector extends PureComponent {
  render() {
    const { match, onDisplayChange } = this.props;
    return(
      <select
        defaultValue=''
        onChange={e => {
          e.preventDefault();
          const { value } = e.target;
          onDisplayChange(value);
          this.props.history.push(`${match.url}/${value}`)
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

export default withRouter(PhotoDisplaySelector);