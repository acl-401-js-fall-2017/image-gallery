import React, { PureComponent } from 'react';

export default class AddAlbum extends PureComponent {
  
  render() {

    const { onAdd } = this.props;

    return (
      <div>
        <h3>You Can Add Your Own Album</h3>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          onAdd(elements.title.value);
        }}>
          <input type="text" name="title" placeholder="album title" required />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}