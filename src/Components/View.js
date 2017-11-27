import React, { Component } from 'react';
import { 
  Route, Switch,
  Redirect } from 'react-router-dom';
import images from '../images';
import Table from './Table';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import { NavLink } from 'react-router-dom';
import { addImage, removeImage } from '../Actions/image.actions';

export default class View extends Component {
  constructor() {
    super();
    this.state = {
      images
    };
  }

  handleViewChange(value) {
    this.setState({
      viewSelection: value
    });
  }

  handleAdd = image => {
    const newState = addImage(this.state.images, image);
    this.setState(newState);
  }

  handleRemove = id => {
    const newState = removeImage(this.state.images, id);
    this.setState(newState);
  }

  render() {
    const displayView = {
      table: <Table images={this.state.images}
        removeImage={imageId => this.handleRemove(imageId)}
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