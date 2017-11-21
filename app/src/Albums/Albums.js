import React, { PureComponent } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import AlbumThumb from './AlbumThumb';
import AlbumPage from './AlbumPage';

import albumsApi from '../services/album-api';
import { loadAlbums } from '../actions';

import './Albums.css';

class Albums extends PureComponent {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  async componentDidMount() {
    const albums = await albumsApi.get();
    const newState = loadAlbums(this.state, albums);
    this.setState(newState);
  }

  handleAlbumClick = (albumName) => {
    console.log(`${this.props.match.url}/${albumName}`)
    this.props.history.push(`${this.props.match.url}/${albumName}`);
  }

  handleNewAlbum = e => {
    e.preventDefault();
    albumsApi.add(e.target.title.value);
  }

  render() {
    const { albums } = this.state;
    const { match } = this.props;
    return (
      <section className="Albums">
        <header className="albumHeader">
          <h1>Albums</h1>
          <form
            onSubmit={this.handleNewAlbum}
          >
            <input type="test" name="title" placeholder="New Album Name"/>
            <input type="submit" name="newAlbum"/>
          </form>
        </header>
        <Switch>
          <Route exact path={match.url} render={() => (
            <div className="albumThumbs">
              {albums.map(album => (
                <AlbumThumb
                  key={album._id}
                  album={album}
                  onClick={this.handleAlbumClick}
                />
              ))}
            </div>
          )}/>
          {albums &&
            albums.map(album => {
              return (
                <Route key={album._id} path={`${match.url}/${album.name}`} render={({ match }) => (
                  <AlbumPage
                    album={album}
                  />
                )} />
              )
            })}
          {albums.length > 0 && <Redirect to={`${match.url}/test`}/>}
        </Switch>
      </section>
    );
  }
}

export default withRouter(Albums);