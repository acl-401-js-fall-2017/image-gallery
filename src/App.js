import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './components/Album';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect,
  Link
} from 'react-router-dom';


class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Panda Gallery</h1>
            <nav>
              <ul>
                <li > <Link to="/"> Home </Link> </li>
                <li > <Link to="/albums"> Albums </Link> </li>
                <li > <Link to="/about"> About </Link> </li>
              </ul>
            </nav>
          </header>

          <div className="App-intro">
          Here are some pandas for you to look at:
            <Switch>
              <Route exact path="/about" component={About}/>
              <Route exact path="/albums/:id?" component={Album}/>
              <Route exact path="/" component={Home}/>
              <Redirect to="/"/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome to PandaPics!</h1>
    <Link to="/:id/list"> List </Link>   
  </div>
);

const About = () => (
  <div>
    <h1>This is the About for PandaPics!</h1>
    <p>
      tibet pandruff expandability expandabilities raccoon Kung-Fu fur white expandability
      zoo pandalism forager bear cuddly pandruff bamboo white Panda raccoon forager fur 
      expandable pandalism tibet red
    </p>  
    <Link to="/list"> List </Link>
    <Link to="/thumb"> Thumbnail </Link>
    <Link to="/gallery"> Gallery </Link>
  </div>
);

export default App;