import React, { Component } from 'react';
import albumApi from '../services/album-api';
import { loadAlbums } from '../data/albumActions';

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


  render() {
    const { albums } = this.state;
    return(
      <section>
        <ul>
          {albums.map((album) => {
            return (
              <li key={album._id}> 
                < a href={album.url} >
                  { album.name } </a>
              </li>);
          })}
        </ul>   
      </section>
    );
  }
}
