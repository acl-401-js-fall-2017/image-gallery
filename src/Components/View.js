import React, { Component } from 'react';
import { 
  Route, Switch,
  Redirect } from 'react-router-dom';
import images from '../images';
import Table from '../table/Table';
import Thumbnail from '../thumbnail/Thumbnail';
import Gallery from '../gallery/Gallery';
import { NavLink } from 'react-router-dom';
import imageApi from '../services/image-api';
import { addImage, removeImage } from '../table/table.actions';

export default class View extends Component {
  constructor() {
    super();
    this.state = {
      images,
      viewSelection: null
    };
  }

  getImageId() {
    return this.props.match.params.id;
  }
  handleViewChange(value) {
    this.setState({
      viewSelection: value
    });
  }

  handleAdd = async ({ title, description, url }) => {
    const image = await imageApi.add({ title, description, url });
    const newState = addImage(this.state, image);
    this.setState(newState);
  }

  handleRemove = async id => {
    await imageApi.remove(id);
    const newState = removeImage(this.state, id);
    this.setState(newState);
  }

  render() {
    const displayView = {
      table: <Table images={this.state.images}
        removeImage={imageId => this.handleRemove(imageId)}
        addImage={image => this.handleAdd(image)}
      />,
      thumbnail: <Thumbnail images={this.state.images}/>,
      gallery: <Gallery images={this.state.images}/>
      
    };
    const { match } = this.props;
    const ViewLink = props => <NavLink {...props}/>;
    return (
      <div className="View">
        <h2>View Options</h2>
        <ul>
          <li><ViewLink to={`${match.url}/table`}>Table</ViewLink></li>
          <li><ViewLink to={`${match.url}/thumbnail`}>Thumbnail</ViewLink></li>
          <li><ViewLink to={`${match.url}/gallery`}>Gallery</ViewLink></li>
        </ul>
        <Switch>
          <Route path={`${match.url}/table`} render={() => displayView.table}/>
          <Route path={`${match.url}/thumbnail`} render={() => displayView.thumbnail}/>
          <Route path={`${match.url}/gallery`} render={() => displayView.gallery}/>
          <Redirect to={`${match.url}/table`}/>
        </Switch>
      </div>
    );
  }
}