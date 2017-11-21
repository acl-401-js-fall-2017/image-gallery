import React, { Component } from 'react';
import Selector from './Components/Selector';
import images from './images';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images
    };
    
  }

  handleAdd = images => {
    this.setState({ images });
  }

  handleRemove = images => {
    this.setState({ images });
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Selector images={images} onAdd={this.handleAdd} onRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
