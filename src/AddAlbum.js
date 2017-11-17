import React, { PureComponent } from 'react';
// import AddImage from './AddImage';

export default class AddAlbum extends PureComponent {
  render() {
    const { handleOnSubmit, albums } = this.props;
    const album = (<div className="album-list">
      {albums.map((album) => (
        <div key={album._id} >
          <h2>{album.title}</h2>
        </div>
      ))}
    </div>);
    
    return (
      <div>
        {album}
        <h3>Add a new Album</h3>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          handleOnSubmit(elements.title.value);
        }}>
          <input type="text" name="title" placeholder="album title" required />
          <br/>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
