import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import View from './View';
import About from './Components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/images" component={View}/>
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
      {/* <h1 className="App-title">Welcome to a World of Bunnies</h1> */}
    </div>
  );
}



