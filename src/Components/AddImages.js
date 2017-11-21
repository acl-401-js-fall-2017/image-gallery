import React, { PureComponent } from 'react';
import shortid from 'shortid';
import { addImage } from '../Actions/image.actions';
import { PropTypes } from 'prop-types';

class AddImages extends PureComponent {
  render() {
    
    const { images, onAdd } = this.props;
    
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          const { elements } = e.target;
          const newImage = {
            _id: shortid.generate(),
            title: elements.title.value,
            description: elements.description.value,
            url: elements.url.value
          };
          e.target.reset();
          const newImages = addImage(images, newImage);
          onAdd(newImages);
        }}>
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