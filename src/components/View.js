import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Bunnies from '../images/bunnies';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import Album from './Album';
import Albums from './Albums';

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

      list: <List bunnies={this.state.bunnies}
        removeImage={imageId => this.handleRemove(imageId)}
        addImage={image => this.handleAdd(image)}
      />,

      thumbnail: <Thumbnail bunnies={this.state.bunnies}/>,

      gallery: <Gallery bunnies={this.state.bunnies}/>

    };

    const HeaderRoutes = props => <NavLink {...props}/>;

    return (
      <div>
        <div>
          <div className="image-links">
            <li>
              <HeaderRoutes exact to="/images/list">List</HeaderRoutes>
            </li>
            <li>
              <HeaderRoutes exact to="/images/thumbnail">Thumbnail</HeaderRoutes>
            </li>
            <li>
              <HeaderRoutes exact to="/images/gallery">Gallery</HeaderRoutes>
            </li>
          </div>

          {/* <Route exact path='/albums/:id' component={Album}/> */}
          <Route exact path='/albums/test' render={() => <h1>test</h1>}/>

          <Route exact path='/images/list' render={() => displayView.list}/>
          <Route exact path='/images/thumbnail' render={() => displayView.thumbnail}/>
          <Route exact path='/images/gallery' render={() => displayView.gallery}/>

        </div>
      </div> 
    );
  }
}