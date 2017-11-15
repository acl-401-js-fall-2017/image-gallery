import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/ListView';
import Thumb from './components/ThumbView';
import Galley from './components/GalleryView';

class App extends Component {

  constructor() {
    super();
    this.state ={
      view: 'list'
    };
  }

  changeView = ({ target }) => {
    this.setState( 
      { view: target.id }
    );
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Panda Gallery</h1>
          {this.state.view !== 'list' && (
            <button id="list" onClick={this.changeView} >List </button>
          )}
          {this.state.view !== 'thumb' && (
            <button id="thumb" onClick={this.changeView} >Thummbnail </button>
          )}
          {this.state.view !== 'gallery' && (
            <button id="gallery" onClick={this.changeView} >Gallery </button>
          )}
        </header>

        <p className="App-intro">
          Here are some pandas for you to look at:
          {this.state.view === 'list' && (
            <List />
          )}
          {this.state.view === 'thumb' && (
            <Thumb />
          )}
          {this.state.view === 'gallery' && (
            <Galley />
          )}
        </p>

      </div>
    );
  }
}

export default App;
