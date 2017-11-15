import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bunnies from './images/bunnies';
import List from './components/List';
import Thumbnail from './components/Thumbnail';
import Gallery from './components/Gallery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      view: 'List',
      bunnies: Bunnies,
      current: 0
    };
  }

  handleClick(name, value) {
    this.setState({
      name: value
    });
  }

  nextImage = value => {
    const imageIndex = this.state.current;
    
  }

  render() {
    return (
      <div className="App">
        <div className="">
          <List bunnies={this.state.bunnies} />
        </div>
        <div className="">
          <Thumbnail bunnies={this.state.bunnies} />
        </div>
        <div className="">
          <Gallery 
            bunnies={this.state.bunnies} 
            current={this.state.current} 
            nextImage={this.nextImage}
          />
        </div>
      </div>
    );
  }
}

export default App;
