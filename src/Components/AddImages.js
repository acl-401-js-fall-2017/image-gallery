import React, { PureComponent } from 'react';
import shortid from 'shortid';
import { addImage } from '../Actions/image.actions';
import { PropTypes } from 'prop-types';

class AddImages extends PureComponent {
  render() {
    
    const { images, handleAdd } = this.props;
    
    return (
      <div>
        <form onSubmit={handleAdd}>
          <input name="title" placeholder="Title" />
          <input name="description" placeholder="Description" />
          <input name="url" placeholder="Url" /> 
          <button type="submit">Add Image</button>
        </form>
      </div>
    );
  }
}

AddImages.propTypes = {
  addImage: PropTypes.func
};

export default AddImages;