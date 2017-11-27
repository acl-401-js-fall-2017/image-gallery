import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  Link  } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import View from './Components/View';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/images" component={View}/>
            <Route exact path="/about" component={About}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome to the Image Gallery!</h1>
    <Link to="/images">View the Images</Link>
  </div>
);

const About = () => (
  <div>
    <h1>About the Image Gallery</h1>
    <p>This is an image gallery made with react.</p>
  </div>
);

export default App;
