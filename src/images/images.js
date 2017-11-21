import React, { PureComponent } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import AddImage from '../forms/AddImage'; ///
import imageApi from '../services/image-api';
import { addImage, removeImage } from './image.actions';
import ImageList from '../views/list';
import ImageThumbnail from '../views/thumbnail';
import ImageGallery from '../views/gallery';

class Images extends PureComponent {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  async componentDidMount() {
    let images;
    if(this.props.isAlbum){
      const albumImg = await imageApi.getAlbumImage(this.getAlbumId());
      images = albumImg.images;
    }else{
      images = await imageApi.getAll();
    }
    this.setState({ images });
  }

  getAlbumId() {
    return this.props.match.params.id;
  }

  handleAdd = async (title , description, url) => {
    const image = {
      album: this.getAlbumId(),
      title: title,
      description: description,
      url: url
    };
    await imageApi.add(image);
    const newState = addImage(this.state, image);
    this.setState(newState);
  }

  handleRemove = async image => {
    await imageApi.remove(image._id);
    const newState = removeImage(this.state, image._id);
    this.setState(newState);
  }

  render() {
    const { images } = this.state;
    return (
      
      <div>
        <Switch>
          <Route exact path={`${this.props.match.url}/list`} render={() => <ImageList images={images} onDelete={this.handleRemove}/>}/>
          <Route exact path={`${this.props.match.url}/thumbnail`} render={() => <ImageThumbnail images={images} onDelete={this.handleRemove}/>}/>
          <Route exact path={`${this.props.match.url}/gallery`}  render={() => <ImageGallery images={images} onDelete={this.handleRemove}/>}/>
        </Switch>
        <div className="viewList">
          <ul>
            <li><Link to ={`${this.props.match.url}/list`}>list</Link></li>
            <li><Link to ={`${this.props.match.url}/thumbnail`}>thumbnail</Link></li>
            <li><Link to ={`${this.props.match.url}/gallery`}>gallery</Link></li>
          </ul>
        </div>
        <AddImage  handleOnSubmit={this.handleAdd}/>
      </div>
      
    );
  }
}

export default Images;