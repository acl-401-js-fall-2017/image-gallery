import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumApi from '../services/album-api';
import { loadAlbums, addAlbum, removeAlbum } from './album.actions';
import AddAlbum from '../forms/AddAlbum';



class Albums extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
  }
    
  async componentDidMount() {
    const albums = await albumApi.get();
    const newState = loadAlbums(this.state, albums);
    this.setState(newState);
  }

  handleAdd = async (name) => {
    const album = await albumApi.add({ name });
    const newState = addAlbum(this.state, album);
    this.setState(newState);
  }

  
  handleRemove = async (id) => {
    console.log(id);
    await albumApi.remove(id);
    const newState = removeAlbum(this.state, id);
    this.setState(newState);
  }
  
  render() {
    const { albums, handleRemove } = this.state;

    return (
      <section>
        <h3>My Albums</h3>
        <ul className="albums">
          {albums.map(album => (
            <li key={album._id}>
              <Link to={`/albums/${album._id}`}>{album.name}</Link>
              <button onClick={() => this.handleRemove(album._id)}>X</button>
            </li>
          ))}
        </ul>
        <AddAlbum type="list" onAdd={this.handleAdd} albums={albums}>
          <input name="title"/>
        </AddAlbum>
      </section>
    );
  }
}
  
  
export default Albums;