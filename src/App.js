import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/ListView';
import Thumb from './components/ThumbView';
import Gallery from './components/GalleryView';
import { loadImages } from './data/viewActions';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect,
  Link
} from 'react-router-dom';


class App extends Component {

  constructor() {
    super();
    this.state ={
      view: 'list',
      images: []
    };
  }

  componentWillMount() {
    const newState = loadImages(this.state);
    this.setState(newState);
  }

  render() {
    const { images } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Panda Gallery</h1>
            <button id="list"> <Link to="/"> Home </Link> </button>
            <button id="list"> <Link to="/list"> List </Link> </button>
            <button id="thumb"> <Link to="/thumb"> Thumbnail </Link> </button>
            <button id="gallery"> <Link to="/gallery"> Gallery </Link> </button>
            <button id="list"> <Link to="/about"> About </Link> </button>
          </header>

          <div className="App-intro">
          Here are some pandas for you to look at:
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/list" render={() => <List images={images}/>}/>
              <Route exact path="/thumb" render={() => <Thumb images={images}/>}/>
              <Route exact path="/gallery" render={() => <Gallery images={images}/>}/>
              <Route exact path="/about" component={About}/>
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
    <Link to="/:id/thumb"> Thumbnail </Link>  
    <Link to="/:id/gallery"> Gallery </Link>
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