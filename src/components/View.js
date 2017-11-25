import React, { PureComponent } from 'react';
import List from './list';
import Thumbnail from './thumbnail';
import Gallery from './gallery';
import imageAPI from '../services/imageAPI';
import { onDelete, onAdd, loadImages } from './actions';
import {   
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  NavLink } from 'react-router-dom';

const Link = props => <NavLink {...props} 
  className="nav-link" 
  activeClassName="active"
/>;

export default class View extends PureComponent {
  constructor(){
    super();
    this.state = {
      images: []
    };
  }
  async componentDidMount() {
    const images = await imageAPI.get(this.getAlbumId());
    this.setState(loadImages(this.state, images));
  }
  handleDelete = async id => {
    await imageAPI.remove(id);
    this.setState(onDelete(this.state, id));
  }

  getAlbumId() {
    return this.props.match.params.id;
  }
  handleAdd = async (imageData) => {
    const image = await imageAPI.add(imageData);
    this.setState(onAdd(image, this.state));
  }

  render(){
    const { images } = this.state;
    return(
      <Router>
        <div>
          <nav>
            <li>
              <Link exact to="/albums/:id/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/albums/:id/list">List</Link>
            </li>
            <li>
              <Link to="/albums/:id/thumbnail">Thumbnail</Link>
            </li>
          </nav>
          <Switch>
            <Route exact path={`/albums/${this.getAlbumId()}/gallery`} render={() => <Gallery images={images} {...this.props} />}/>
            <Route exact path={`/albums/${this.getAlbumId()}/thumbnail`} render={() => <Thumbnail images={images} {...this.props} />}/>
            <Route exact path="/albums/:id/list" render={() => <List images={images} 
              handleDelete={imageId => this.handleDelete(imageId)}
              handleAdd={image => this.handleAdd(image)} {...this.props} 
              albumId={this.getAlbumId()} />}/>
            <Redirect to={`/albums/${this.getAlbumId()}/gallery`}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
