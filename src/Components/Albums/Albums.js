import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import albumApi from '../../services/album.api';
import { loadAlbums, addAlbum, removeAlbum } from '../../data/albumActions';
import AddAlbum from './AddAlbum';

class Albums extends PureComponent {
  state = {
    albums: []
  };

  async componentDidMount() {
    const albums = await albumApi.get();
    const newState = loadAlbums(this.state, albums);
    this.setState(newState);
  }

  handleAdd = async (newAlbum) => {
    const album = await albumApi.add({ newAlbum });
    const newState = addAlbum(this.state, album);
    this.setState(newState);
  }

  
  handleRemove = async (id) => {
    await albumApi.remove(id);
    const newState = removeAlbum(this.state, id);
    this.setState(newState);
  }
  
  render() {
    const { albums } = this.state;

    return (
      <div>
        <h4>List of Albums</h4>
        <div>
          <ul className="items">
            {albums.map(album => (
              <li key={album._id}>
                <button onClick={() => this.handleRemove(album._id)}>Remove</button>
                <Link to={`/albums/${album._id}`}>{album.name}</Link>
                <span> </span>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <AddAlbum type="list" onAdd={this.handleAdd} albums={albums}>
          <input name="title"/>
        </AddAlbum>
      </div>
    );
  }
}
  
  
export default Albums;