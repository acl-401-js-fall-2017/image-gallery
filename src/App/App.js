import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header';
import View from '../Components/Views/View';
import About from '../Components/About';
import Albums from '../Components/Albums/Albums';
import Album from '../Components/Albums/Album';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/images" component={View}/>
            <Route path="/albums" component={Albums}/>
            <Route path="/albums/:id/(list/gallery/thumbnail)?" component={Album}/>
            <Route exact path="/about" component={About}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div className="Link">
      <h1 className="App-title">Welcome to a World of Bunnies</h1>
    </div>
  );
}



