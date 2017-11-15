import React, { Component } from 'react';
import Photos from './Components/Photos';

import imageData from './data/images.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      display: 'list'   // 'list'|'thumbnail'|'gallery'
    };
  }
  render() {
    const { 
      images,
      display
    } = this.state;
    
    return (
      <div className="App">
        <Photos
          images={images}
          display={display}
        />
      </div>
    );
  }
}

export default App;
