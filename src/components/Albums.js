import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { loadAlbums, addAlbum, removeAlbum } from '../data/actions';
import albumApi from '../service/album.api';
import AddAlbum from '../components/AddAlbum';

export default class Albums extends PureComponent {
    state = {
      albums: []
    }

    async componentDidMount() {
      const albums = await albumApi.get();
      const newState = loadAlbums(this.state, albums);
      this.setState(newState);
    }

    handleAdd = async newAlbum => {
      const album = await albumApi.add(newAlbum);
      const newState = addAlbum(this.state, album);
      this.setState(newState);
    }

    handleRemove = async id => {
      await albumApi.remove(id);
      const newState = removeAlbum(this.state, id);
      this.setState(newState);
    }

    render() {
      const { albums } = this.state;


      return(
        <section>
          <h1>Your Albums</h1>
          <ul className="items">
            {albums.map(album => (
              <li key={album._id}>
                <Link to={`/albums/${album._id}`}>{album.name}</Link>
                <button onClick={() => this.handleRemove(album._id)}>X</button>
              </li>
            ))}
          </ul>
          <AddAlbum onAdd={this.handleAdd}/>
        </section>
      );
    }
}