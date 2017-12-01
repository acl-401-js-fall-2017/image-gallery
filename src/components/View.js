import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Bunnies from '../images/bunnies';
import Album from './Album';

import { addImage, removeImage } from '../data/actions';


export default class View extends Component {

  constructor() {
    super();
    this.state = {
      bunnies: Bunnies,
    };
  }

  handleViewChange(value) {
    this.setState({
      viewSelection: value
    });
  }

  handleRemove = id => {
    const newState = removeImage(this.state, id);
    this.setState(newState);
  }

  handleAdd = image => {
    const newState = addImage(this.state, image);
    this.setState(newState);
  }


  render() {

    const displayView = {

      album: (props) => {
        return (
          <Album {...props} addImage={image => this.handleAdd(image)}
          />);},
    };

    const HeaderRoutes = props => <NavLink {...props}/>;

    return (
      <div>
        <div>
          <div className="image-links">
            <li>
              <HeaderRoutes exact to="/albums/list">List</HeaderRoutes>
            </li>
            <li>
              <HeaderRoutes exact to="/albums/thumbnail">Thumbnail</HeaderRoutes>
            </li>
            <li>
              <HeaderRoutes exact to="/albums/gallery">Gallery</HeaderRoutes>
            </li>
          </div>
          <Route exact path='/albums/:id' render={displayView.album}/>
        </div>
      </div> 
    );
  }
}