import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import View from './View';
// import About from './Components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <View/>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div className="Link">
      <h1 className="App-title">Welcome to a World of Bunnies</h1>
      <Link to="/about">About</Link>
      <Link to="/view">Images</Link>
    </div>
  );
}



