import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  Link } from 'react-router-dom';
import View from './components/View';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/images" component={View}/>
            <Route path="/about" component={About}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome to my Image Gallery!</h1>
    <Link to="/images">View images</Link>
  </div>
);

const About = () => (
  <div>
    <h1>Welcome to my about Page!</h1>
  </div>
);


export default App;
