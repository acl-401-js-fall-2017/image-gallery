import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    const { albums } = this.state;

    return (
      <div className="albums">
        <h4>List of Albums</h4>
        <div>
          <ul className="items">
            {albums.map(album => (
              <li key={album._id}>
                <button onClick={() => this.handleRemove(album._id)}>x</button>
                <NavLink to={`/albums/${album._id}`}>{album.name}</NavLink>
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