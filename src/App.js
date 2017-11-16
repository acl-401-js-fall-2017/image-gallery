import React, { Component } from 'react';
import images from './images';
import Selector from './Selector/Selector';
import './App.css';

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
        <Selector />
      </div>
    );
  }
}

export default App;
