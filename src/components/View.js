import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import Bunnies from '../images/bunnies';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import Home  from './Home';
import Album from './Album';
import Albums from './Albums';
import About from './About';

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

      album: (props) => <Album {...props} addImage={image => this.handleAdd(image)}/>,

      list: <List bunnies={this.state.bunnies}
        removeImage={imageId => this.handleRemove(imageId)}
        addImage={image => this.handleAdd(image)}
      />,

      thumbnail: <Thumbnail bunnies={this.state.bunnies}/>,

      gallery: <Gallery bunnies={this.state.bunnies}/>

    };

    const HeaderRoutes = props => <NavLink {...props} 
      className="nav-link"  activeClassName="active"/>;

    return (
      <div>
        <div>
          <li>
            <HeaderRoutes exact to="/images/list">List</HeaderRoutes>
          </li>
          <li>
            <HeaderRoutes exact to="/images/thumbnail">Thumbnail</HeaderRoutes>
          </li>
          <li>
            <HeaderRoutes exact to="/images/gallery">Gallery</HeaderRoutes>
          </li>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>

            <Route exact path='/albums' component={Albums}/>
            <Route exact path='/albums/:id' render={displayView.album}/>

            <Route exact path='/images/list' render={() => displayView.list}/>
            <Route exact path='/images/thumbnail' render={() => displayView.thumbnail}/>
            <Route exact path='/images/gallery' render={() => displayView.gallery}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </div> 
    );
  }
}