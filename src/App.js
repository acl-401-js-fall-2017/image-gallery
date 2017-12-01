import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import HeaderRoutes from './components/HeaderRoutes';
import Home from './components/Home';
import About from './components/About';
import Albums from './components/Albums';
import Album from './components/Album';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderRoutes/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/albums" component={Albums}/>
            <Route exact path="/albums/:id/(gallery|thumbnail|list)?" component={Album}/>
            <Route exact path="/about" component={About}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
