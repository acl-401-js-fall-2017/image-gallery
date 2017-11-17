import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import View from './components/View';
import HeaderRoutes from './components/HeaderRoutes';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderRoutes/>
          <View/>
        </div>
      </Router>
    );
  }
}

export default App;
