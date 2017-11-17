import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import AddImage from './AddImage';

export default class AddAlbum extends PureComponent {
  render() {
    const { handleOnSubmit, albums } = this.props;
    const album = (<div className="album-list">
      {albums.map((album) => (
        <Link to={`/albums/${album._id}`} key={album._id}>{album.title}</Link> 
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
