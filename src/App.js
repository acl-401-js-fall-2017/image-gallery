import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect } from 'react-router-dom';
import Albums from './components/albums';
import View from './components/view';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/albums" component={Albums}/>
            <Route exact path="/albums/:id" component={View}/>
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
  </div>
);

const About = () => (
  <div>
    <h1>Welcome to my about Page!</h1>
  </div>
);


export default App;
