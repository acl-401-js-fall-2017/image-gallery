import React, { PureComponent } from 'react';
import { Link, Route, Redirect, NavLink, Switch  } from 'react-router-dom';
import styled from 'styled-components';
import { loadAlbums, deleteAlbum } from '../utils/actions';
import albumsApi from '../utils/services/albumsApi';
import newAlbum from './newAlbum';
import AlbumView from './AlbumView';

export default class Home extends PureComponent{

  state = {
    albums: []
  }


  async componentDidMount() {
    const album = await albumsApi.get();
    console.log(album);
    const newState = loadAlbums(this.state, album);
    this.setState(newState);
    console.log('albums just maunted and we got',this.state);
  }

  handleDelete = async id => {
    await albumsApi.remove(id);
    const newState = deleteAlbum(this.state, id);
    this.setState(newState);
  }


  render() {
    return (
      <div>
        <p>Welcome to Albums!</p>
        <StyledDiv>
          <ul>
            {this.state.albums.map(album => (
              <div key={album._id} style ={{ display: 'flex', margin: '8px' }}>
                <DeleteDiv onClick={() => this.handleDelete(album._id)}>X</DeleteDiv>
                <NavLink to={`/albums/${album._id}`} > <li type= "none">{album.name}</li> </NavLink>
              </div>
            ))}
            <li type="none"><Link to="/albums/newAlbum"> Add New Album </Link></li>
          </ul>
        </StyledDiv>
      </div>
    );
  }
}

const StyledDiv = styled.div`
display:'flex';
width: 90%;
justify-content:space-between;
`;

const DeleteDiv = styled.div`
border: 1px solid black;
margin-right: 1%;
`;