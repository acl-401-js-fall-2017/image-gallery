import React, { Component } from 'react';
import Photos from './Components/Photos';

import {
  changeDisplay
} from './actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: 'thumbnails'   // 'list'|'thumbnails'|'gallery'
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
      <div className="App">
        <Photos
          display={display}
          handleDisplayChange={value => this.handleDisplayChange(value)}
        />
      </div>
    );
  }
}

export default App;
