import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import View from './components/View';
import HeaderRoutes from './components/HeaderRoutes';
import Home from './components/Home';
import About from './components/About';
import Albums from './components/Albums';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderRoutes/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/images" component={View}/>
            <Route exact path="/albums/:id?" component={Albums}/>
            <Route exact path="/about" component={About}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
