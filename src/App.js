import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/ListView';
import Thumb from './components/ThumbView';
import Gallery from './components/GalleryView';
import { loadImages } from './data/viewActions';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect,
  Link
} from 'react-router-dom';


class App extends Component {

  constructor() {
    super();
    this.state ={
      view: 'list',
      images: []
    };
  }

  componentWillMount() {
    const newState = loadImages(this.state);
    this.setState(newState);
  }

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Panda Gallery</h1>
            {this.state.view !== 'list' && (
              <button id="list"> <Link to="/link"> List </Link> </button>
            )}
            {this.state.view !== 'thumb' && (
              <button id="thumb" onClick={this.changeView} >Thummbnail </button>
            )}
            {this.state.view !== 'gallery' && (
              <button id="gallery" onClick={this.changeView} >Gallery </button>
            )}
          </header>

          <div className="App-intro">
          Here are some pandas for you to look at:
            <Switch>
              {this.state.view === 'list' && (
                <List images={images}/>
              )}
              {this.state.view === 'thumb' && (
                <Thumb images={images}/>
              )}
              {this.state.view === 'gallery' && (
                <Gallery images={images}/>
              )}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
