import React, { PureComponent } from 'react';
import albumsAPI from '../services/albumsAPI';
import { onDeleteAlbum, onAddAlbum, loadAlbums } from './actions';
import AddAlbum from './AddAlbum';

export default class Albums extends PureComponent {
  constructor(){
    super();
    this.state = {
      albums: []
    };
  }
	
  async componentDidMount() {
    const albums = await albumsAPI.get();
    console.log('Received from get', albums);
    const newState = loadAlbums(this.state, albums);
    this.setState(newState);
  }
	
	handleDelete = async id => {
	  await albumsAPI.remove(id);
	  const newState = onDeleteAlbum(this.state, id);
	  this.setState(newState);
	}

	handleAdd = async (albumData) => {
	  const album = await albumsAPI.add(albumData);
	  const newState = onAddAlbum(album, this.state);
	  this.setState(newState);
	}
	
	render(){
	  const albumList = this.state.albums.map(album => {
	    const listItem = album.name? <li>{album.name}</li> : null;
	    return listItem;
	  });
	  return(
	    <div>
	    	<ul>
	      	{albumList}
	    	</ul>
	      <AddAlbum handleAdd={album => this.handleAdd(album)}/>
	    </div>
	  );
	}
}