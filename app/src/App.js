import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Albums from './Albums/Albums';
import Photos from './Photos/Photos';
import Minigame from './Minigame/Minigame';
import BottomBar from './BottomBar/BottomBar';

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
          <Switch>
            <Route path="/albums" render={({match}) => (
              <Albums
                match={match}
              />
            )}/>
            <Route path="/photos" render={({ match }) => (
              <Photos
                display={display}
                match={match}
                handleDisplayChange={value => this.handleDisplayChange(value)}
              />  
            )}/>
            <Route path="/minigame" component={Minigame}/>
            <Redirect to="/albums"/>
          </Switch>
          <BottomBar/>
        </div>
      </Router>
    );
  }
}

export default App;
