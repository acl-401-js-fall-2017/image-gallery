import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import About from './About';
import Images from './Images';
  
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/images" component={Images}/>
            <Route exact path="/about/" component={About}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
