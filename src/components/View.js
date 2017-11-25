import React, { PureComponent } from 'react';
import Albums from './Albums';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import imageAPI from '../services/imageAPI';
import { onDelete, onAdd, loadImages } from './actions';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  NavLink } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props} 
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
    console.log(`performing get after mount on id ${this.getAlbumId()}`);
    const images = await imageAPI.get(this.getAlbumId());
    console.log('Received from get', images);
    const newState = loadImages(this.state, images);
    this.setState(newState);
  }
 
  handleDelete = async id => {
    await imageAPI.remove(id);
    const newState = onDelete(this.state, id);
    this.setState(newState);
  }

  getAlbumId() {
    return this.props.match.params.id;
  }
  handleAdd = async (imageData) => {
    const image = await imageAPI.add(imageData);
    const newState = onAdd(image, this.state);
    this.setState(newState);
  }

  render(){
    const { images } = this.state;
    return(
      <Router>
        <div>
          <nav>
            <li>
              <HeaderLink exact to="/albums/:id/gallery">Gallery</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/albums/:id/list">List</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/albums/:id/thumbnail">Thumbnail</HeaderLink>
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
