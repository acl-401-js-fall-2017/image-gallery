import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Images from './components/images';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Wonders of The World</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/images">Images</Link>
              <ul>
                <li><Link to ="/images/albums">Albums </Link></li>
                <li><Link to ="/images/addimages">Add Images</Link></li>
                <li>Views
                  <ul>
                    <li><Link to ="/images/list">list</Link></li>
                    <li><Link to ="/images/thumbnail">thumbnail</Link></li>
                    <li><Link to ="/images/gallery">gallery</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path="/images" component={Images}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
