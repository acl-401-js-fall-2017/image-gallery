import React, { PureComponent } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { addBunny, removeBunny } from '../../data/viewActions';
import imageApi from '../../services/image.api';
import albumApi from '../../services/album.api';
import GalleryView from '../Views/GalleryView';
import ListView from '../Views/ListView';
import ThumbView from '../Views/ThumbView';

export default class Album extends PureComponent {
  state = {
    images: []
  }

  async componentDidMount() {
    const album = await albumApi.getById(this.props.match.params.id);
    this.setState(album);
  }

  handleAdd = async newBunny => {
    newBunny.album = this.props.match.params.id;
    const image = await imageApi.add(newBunny);
    const newState = addBunny(this.state, image);
    this.setState(newState);
  }

  handleRemove = async id => {
    await imageApi.remove(id);
    const newState = removeBunny(this.state, id);
    this.setState(newState);
  }

  getAlbumId () {
    return this.props.match.params.id;
  }

  render() {

    const displayView = {
      
      list: () => <ListView images={this.state.images}
        handleRemove={imageId => {
          return this.handleRemove(imageId);
        }}
        addImage={image => this.handleAdd(image)}/>,
      
      gallery: () => <GalleryView images={this.state.images}/>,
      
      thumbnail: () => <ThumbView images={this.state.images}/>
      
    };
    const Header = props => <NavLink {...props}/>;
    return(
      <section>
        <h3>Display your pictures in different views!</h3>
        <div className="image-links">
          <li>
            <Header
              exact to={`/albums/${this.getAlbumId()}/list`}>List</Header>
          </li>
          <li>
            <Header
              exact to={`/albums/${this.getAlbumId()}/thumbnail`}>Thumbnail</Header>
          </li>
          <li>
            <Header
              exact to={`/albums/${this.getAlbumId()}/gallery`}>Gallery</Header>
          </li>
        </div>
        <Route exact path={`/albums/${this.getAlbumId()}/list`} component={displayView.list}/>
        <Route exact path={`/albums/${this.getAlbumId()}/gallery`} component={displayView.gallery}/>
        <Route exact path={`/albums/${this.getAlbumId()}/thumbnail`} component={displayView.thumbnail}/>
      </section>
    );
  }
}