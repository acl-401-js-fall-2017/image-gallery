import React, { Component } from 'react';
import Gallery from '../components/GalleryView';
import Thumb from '../components/ThumbView';
import List from '../components/ListView';
import imageApi from '../services/images-api';
import { Link } from 'react-router-dom';
import { loadImages, removeImage, addImage } from '../data/imageActions';


export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    imageApi.get(this.props.match.params.id)
      .then(images => {
        this.setState(loadImages(this.state, images));
      });
  }

  deleteImage = id => {
    imageApi.remove(id)
      .then(image => {
        this.setState(removeImage(this.state, image._id));
      });
  }

  renderView = () => {
    const View = { 
      list:  List,
      gallery:  Gallery,
      thumb:  Thumb      
    }[this.props.match.params.view || 'list'];
    return <View onDelete={this.deleteImage} images={this.state.images}/>;
  }


  render() {
    const { id }= this.props.match.params;
    return(
      <section>
        <ul>
          <li>
            <Link to={`/albums/${id}/list`}>List</Link>
            <Link to={`/albums/${id}/gallery`}>Gallery</Link>
            <Link to={`/albums/${id}/thumb`}>Thumb</Link>
          </li>
        </ul>
        {this.renderView()}
      </section>
    );
  }
}
