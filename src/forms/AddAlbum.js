import React, { PureComponent } from 'react';

export default class AddAlbum extends PureComponent {
  render() {
    const { onAdd } = this.props;
  
    return (
      <div className="add-album">
        <h3>Add a new Album</h3>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          onAdd(elements.title.value);
        }}>
          <input type="text" name="title" placeholder="album title" required />
          <br/>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

