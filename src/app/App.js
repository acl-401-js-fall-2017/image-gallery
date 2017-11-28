import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
} from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import About from './About';
import Images from '../images/Images';
import Albums from '../albums/Albums';
  
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/albums/:id" component={Images}/>
            <Route exact path="/about/" component={About}/>
            <Route to="/albums" component={Albums}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
