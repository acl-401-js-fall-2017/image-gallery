import React, { PureComponent } from 'react';
    
export default class AddImage extends PureComponent {
  render() {
    const { handleOnSubmit } = this.props;
    return (
      <div>
        <h2>Add a new image!</h2>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          handleOnSubmit(elements.title.value, elements.description.value, elements.url.value);
        }}>
          <input type="text" name="title" placeholder="image title" required />
          <br/>
          <textarea rows="5" cols="60" name="description" placeholder="image description" required />
          <br/>
          <input type="url" name="url" placeholder="image url" required />
          <br/>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}