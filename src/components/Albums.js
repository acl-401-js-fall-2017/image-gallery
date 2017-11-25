import React, { PureComponent } from 'react';
import albumsAPI from '../services/albumsAPI';
import { onDeleteAlbum, onAddAlbum, loadAlbums } from './actions';
import AddAlbum from './AddAlbum';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  NavLink } from 'react-router-dom';
	
const HeaderLink = props => <NavLink {...props} 
  className="nav-link" 
  activeClassName="active"
/>;

export default class Albums extends PureComponent {
  constructor(){
    super();
    this.state = {
      albums: []
    };
  }
	

	
  async componentDidMount() {
    const albums = await albumsAPI.get(this.getAlbumId());
    console.log('Received from get', albums);
    const newState = loadAlbums(this.state, albums);
    this.setState(newState);
	}
	
	getAlbumId() {
    return this.props.match.params.id;
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
	    const listItem = album.name? 
	      <li><HeaderLink exact to={`/albums/${album._id}`}>{album.name}</HeaderLink></li> : null;
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