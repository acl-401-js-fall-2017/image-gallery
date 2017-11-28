import React, { PureComponent } from 'react';
import shortid from 'shortid';

class AddImages extends PureComponent {
  render() {
    
    const { addImage } = this.props;
    
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
          return addImage(newImage);
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

export default AddImages;