import React, { PureComponent } from 'react';

export default class AddAlbum extends PureComponent {
  
  render() {

    const { addsAlbum } = this.props;

    return (
      <div>
        <h3>Add an Album!</h3>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          const newAlbum = {
            name: elements.title.value
          };
          elements.title.value = '';
          addsAlbum(newAlbum);
        }}>
          <input type="text" name="title" placeholder="album title" required />
          <button type="submit">Add Album</button>
        </form>
      </div>
    );
  }
}