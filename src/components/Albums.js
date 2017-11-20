import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import albumApi from '../service/album.api';
import { loadAlbums, addImage, removeImage } from '../data/actions';
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

    handleAdd = async ({ title }) => {
      const album = await albumApi.add({ title });
      const newState = addImage(this.state, album);
      this.setState(newState);
    }

    handleRemove = async id => {
      await albumApi.remove(id);
      const newState = removeImage(this.state, id);
      this.setState(newState);
    }

    render() {
      const { albums } = this.state;

      return(
        <section>
          <h1>Hello!</h1>
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