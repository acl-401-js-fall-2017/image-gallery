import React, { PureComponent } from 'react';
import { NavLink, Route } from 'react-router-dom';
import albumApi from '../service/album.api';
import imagesApi from '../service/images.api';
import { addImage, removeImage } from '../data/actions';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

export default class Album extends PureComponent {
    state = {
      images: []
    }

    async componentDidMount() {
      const album = await albumApi.getById(this.props.match.params.id);
      this.setState(album);
    }

    handleAdd = async newImage => {
      newImage.album = this.props.match.params.id;
      const image = await imagesApi.add(newImage);
      const newState = addImage(this.state, image);
      this.setState(newState);
    }

    handleRemove = async id => {
      await imagesApi.remove(id);
      const newState = removeImage(this.state, id);
      this.setState(newState);
    }

    getAlbumId () {
      return this.props.match.params.id;
    }

    render() {
      // const { handleRemove } = this.props;

      const displayView = {
        
        list: () => <List images={this.state.images}
          handleRemove={imageId => {
            return this.handleRemove(imageId);
          }}
          addImage={image => this.handleAdd(image)}
        />,
        
        thumbnail: () => <Thumbnail images={this.state.images}/>,
        
        gallery: () => <Gallery images={this.state.images}/>
        
      };
      const HeaderRoutes = props => <NavLink {...props}/>;
      return(
        <section>
          <Route exact path={`/albums/${this.getAlbumId()}/gallery`} component={displayView.gallery}/>
          <Route exact path={`/albums/${this.getAlbumId()}/list`} component={displayView.list}/>
          <Route exact path={`/albums/${this.getAlbumId()}/thumbnail`} component={displayView.thumbnail}/>
          <div className="image-links">
            <li>
              <HeaderRoutes exact to={`/albums/${this.getAlbumId()}/list`}>List</HeaderRoutes>
            </li>
            <li>
              <HeaderRoutes exact to={`/albums/${this.getAlbumId()}/thumbnail`}>Thumbnail</HeaderRoutes>
            </li>
            <li>
              <HeaderRoutes exact to={`/albums/${this.getAlbumId()}/gallery`}>Gallery</HeaderRoutes>
            </li>
          </div>

          <h3> ALLLLBUUUUMMMMMSSSSS!!!!!!!!</h3>
        </section>
      );
    }
}