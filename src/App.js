import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from 'react-router-dom';
import bunny from './image/bunny.jpg';
import './App.css';
import View from './View';
// import about from './about';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={bunny} className="App-logo" alt="" />
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/about" component={about}/> */}
              {/* <Route path="/View" component={View}/> */}
              <Redirect to="/"/>
            </Switch>
          </header>
          <View/>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div className="Link">
    <h1 className="App-title">Welcome to a World of Bunnies</h1>
    <Link to="/bunnies">Link Placeholder</Link>
  </div>
);



