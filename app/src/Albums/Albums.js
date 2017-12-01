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

    this.handleNewAlbum = this.handleNewAlbum.bind(this);
  }

  async componentDidMount() {
    const albums = await albumsApi.get();
    const newState = loadAlbums(this.state, albums);
    this.setState(newState);
  }

  handleAlbumClick = (albumName) => {
    this.props.history.push(`${this.props.match.url}/${albumName}`);
  }

  handleRemoveAlbum = async (id) => {
    const removed = await albumsApi.remove(id);
    if(removed) {
      const updatedAlbums = [ ...this.state.albums];
      console.log(updatedAlbums.filter(album => album._id !== id))
      this.setState({
        albums: updatedAlbums.filter(album => album._id !== id)
      });
    }
  }

  async handleNewAlbum(e) {
    e.preventDefault();
    const newAlbum = await albumsApi.add(e.target.title.value);
    this.setState({
      albums: [
        ...this.state.albums,
        newAlbum
      ]
    });
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
              {albums.length > 0 &&
                albums.map(album => (
                  <AlbumThumb
                    key={album._id}
                    album={album}
                    onClick={this.handleAlbumClick}
                  />
                ))
              }
            </div>
          )}/>
          {albums &&
            albums.map(album => {
              return (
                <Route key={album._id} path={`${match.url}/${album.name}`} render={({ match }) => (
                  <AlbumPage
                    album={album}
                    onRemoveAlbum={this.handleRemoveAlbum}
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