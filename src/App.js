import React, { Component } from 'react';
import images from './images';
import Selector from './Selector';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  constructor() {
    super();
    this.state = {
      images,
    };
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Selector images={images}/>
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.array
};

export default App;
