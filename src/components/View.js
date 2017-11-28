import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Bunnies from '../images/bunnies';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import Home  from './Home';
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

      album: (props) => <Album {...props} addImage={image => this.handleAdd(image)}/>,

      list: <List bunnies={this.state.bunnies}
        removeImage={imageId => this.handleRemove(imageId)}
        addImage={image => this.handleAdd(image)}
      />,

      thumbnail: <Thumbnail bunnies={this.state.bunnies}/>,

      gallery: <Gallery bunnies={this.state.bunnies}/>

    };

    return (
      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/albums' component={Albums}/>
            <Route exact path='/albums/:id' render={displayView.album}/>
            <Route exact path='/list' render={() => displayView.list}/>
            <Route exact path='/thumbnail' render={() => displayView.thumbnail}/>
            <Route exact path='/gallery' render={() => displayView.gallery}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </div> 
    );
  }
}