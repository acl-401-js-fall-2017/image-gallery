import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from 'react-router-dom';
import bunny from './image/bunny.jpg';
import './App.css';
import View from './View';
// import ListView from './Components/ListView';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={bunny} className="App-logo" alt="" />
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route exact path="/Components/ListView" component={ListView}/> */}
              <Redirect to="/"/>
            </Switch>
          </header>
          <View/>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  <div>
    <h1 className="App-title">Welcome to a World of Bunnies</h1>
    <Link to="/bunnies">View More Bunnies</Link>
  </div>;
};



