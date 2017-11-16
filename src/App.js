import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Photos from './Components/Photos';
import Minigame from './Components/Minigame';
import BottomBar from './Components/BottomBar';

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
            <h1 style={{ marginTop: '30%' }}>HOME</h1>
          )}/>
          <Route path="/photos" render={({ match }) => (
            <Photos
              display={display}
              match={match}
              handleDisplayChange={value => this.handleDisplayChange(value)}
            />  
          )}/>
          <Route path="/minigame" component={Minigame}/>
          <BottomBar/>
        </div>
      </Router>
    );
  }
}

export default App;
