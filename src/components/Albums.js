import React, { Component } from 'react';
import albumApi from '../services/album-api';
import { loadAlbums, removeAlbum } from '../data/albumActions';
import { Link } from 'react-router-dom';


export default class Albums extends Component {
  constructor() {
    super();
    this.state = {
      view: 'list',
      images: [],
      albums: []
    };
  }

  componentDidMount() {
    albumApi.get()
      .then(albums => {
        this.setState(loadAlbums(this.state, albums));
      });
  }

  deleteAlbum = id => {
    albumApi.remove(id)
      .then(albums => {
        this.setState(removeAlbum(this.state, id));
      });
  }

  render() {
    const { albums } = this.state;
    return(
      <section>
        <ul>
          {albums.map((album) => {
            return (
              <li key={album._id}> 
                <Link to={`/albums/${album._id}`}>{ album.name }</Link>
                <button onClick={()  => this.deleteAlbum(album._id)} >X</button>
              </li>);
          })}
        </ul>   
      </section>
    );
  }
}
