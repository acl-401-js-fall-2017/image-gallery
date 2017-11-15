import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state ={
      view: 'list'
    };
  }

  changeView = ({ target }) => {
    this.setState( 
    { view: target.id }
    );
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Panda Gallery</h1>
          {this.state.view !== 'list' && (
            <button id="list" onClick={this.changeView} >List </button>
          )}
          {this.state.view !== 'thumb' && (
            <button id="thumb" onClick={this.changeView} >Thummbnail </button>
          )}
          {this.state.view !== 'gallery' && (
            <button id="gallery" onClick={this.changeView} >Gallery </button>
          )}
        </header>

        <p className="App-intro">
          Here are some pandas for you to look at:
          {this.state.view === 'list' && (
            <li> list
            </li>
          )}
          {this.state.view === 'thumb' && (
            <li> thumbnail
            </li>
          )}
          {this.state.view === 'gallery' && (
            <li> gallery
            </li>
          )}

         <ul>
            < li > Panda 1 < a href = "http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg" >
             http: //f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg  </a></li>
            < li > Panda 2 < a href = "http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg" >
             http: //static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg  </a></li>
            < li > Panda 3 < a href = "http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg" >
             http: //static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg  </a></li>
        </ul>   

        </p>
        
      </div>
    );
  }
}

export default App;
