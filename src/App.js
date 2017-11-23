import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import HeaderLinks from './HeaderLinks';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Bunnyweb.tk</h1>
            <HeaderLinks/>
          </header>
          <Display/>
        </div>
      </Router>
    );
  }
}


export default App;
