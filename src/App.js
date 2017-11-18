import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from 'react-router-dom';
import flops from './image/flops.png';
import './App.css';
import View from './View';
import About from './Components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={flops} className="App-logo" alt="" />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route exact path="/view" component={View}/>
              <Redirect to="/"/>
            </Switch>
          </header>
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



