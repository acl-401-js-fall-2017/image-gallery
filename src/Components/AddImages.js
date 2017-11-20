import React, { PureComponent } from 'react';
import shortid from 'shortid';

export default class AddImages extends PureComponent {
  render() {
    
    const { addImage } = this.props;
    
    return (
      <div>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          const newImg = {
            _id: shortid.generate(),
            title: elements.title.value,
            description: elements.description.value,
            url: elements.url.value
          };
          elements.title.value = elements.description.value = elements.url.value = '';
          return addImage(newImg);
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