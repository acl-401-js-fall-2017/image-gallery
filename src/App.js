import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bunnies from './images/bunnies';
import List from './components/List';
import Thumbnail from './components/Thumbnail';

class App extends Component {

  constructor() {
    super();
    this.state = {
      view: 'List',
      bunnies: Bunnies
    };
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <List bunnies={this.state.bunnies} />
        </div>
        <div className="">
          <Thumbnail bunnies={this.state.bunnies} />
        </div>
      </div>
    );
  }
}

export default App;
