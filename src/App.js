import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Bunnies from './images/bunnies';
// import List from './components/List';
// import Thumbnail from './components/Thumbnail';
// import Gallery from './components/Gallery';
import View from './components/View';


class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     view: 'List',
  //     bunnies: Bunnies,
  //     current: 0
  //   };
  // }

  render() {
    return (
      // <div className="App">
      //   <div className="">
      //     <List bunnies={this.state.bunnies} />
      //   </div>
      //   <div className="">
      //     <Thumbnail bunnies={this.state.bunnies} />
      //   </div>
      //   <div className="">
      //     <Gallery 
      //       bunnies={this.state.bunnies} 
      //       current={this.state.current} 
      //       nextImage={this.nextImage}
      //     />
      //   </div>
      // </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <View/>
      </div>
    );
  }
}

export default App;
