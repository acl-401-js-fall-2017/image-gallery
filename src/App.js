import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Photos from './Components/Photos';

import {
  changeDisplay
} from './actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: 'list'   // 'list'|'thumbnails'|'gallery'
    };
  }

  handleDisplayChange = newDisplay => {
    const newState = changeDisplay(this.state, newDisplay);
    this.setState(newState);
  }

  render() {
    const { 
      display
    } = this.state;
    
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => (
            <h1>HOME</h1>
          )}/>
          <Route path="/photos" render={() => (
            <Photos
              display={display}
              handleDisplayChange={value => this.handleDisplayChange(value)}
            />  
          )}/>
          {/* <Route path="/minigame" ren */}
        </div>
      </Router>
    );
  }
}

export default App;
