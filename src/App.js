import React, { Component } from 'react';
import Selector from './Components/Selector';
import './App.css';

class App extends Component {
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
