import React, { Component } from 'react';
import { addAlbum } from '../action-albums';
import { removeAlbum } from '../action-albums';
import './App.css';
import View from '../views/View';
import Albums from '../views/Albums';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
	
class App extends Component {	
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  async componentDidMount() {
    const albums = await fetch('/api/albums').then(response => response.json());
    const newState = { ...this.state, albums };
    this.setState(newState);
  }

  handleAddAlbum = async(album) => {
    const albumName = await fetch('/api/albums', {
      method: 'post',
      body: JSON.stringify(album),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then(response => response.json());
    const newState = addAlbum(this.state, albumName);
    this.setState(newState);
  }

  handleRemoveAlbum = async(id) => {
    await fetch(`/api/albums/${id}`, {
      method: 'delete',
    }).then(response => response.json());
    const newState = removeAlbum(this.state, id);
    this.setState(newState);
  }

  render(){
    const MyAlbums = () => {
      return (
        <Albums 
          onRemove={this.handleRemoveAlbum.bind(this)}
          onAddAlbum={this.handleAddAlbum.bind(this)}
          albums={this.state.albums}
        />
      );
    };
    return(
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/albums" render={MyAlbums}/>
            <Route path="/albums/:albumId" component={View}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

const Home = () => (
  <div id="intro">
    <p>Welcome to the bunny page.</p>
  </div>
);

const About = () => (
  <div id="about">
    <h1>About Bunnies</h1>
    <p>Bunnies are spectacularly cute. But did you know that when a home houses 50 bunnies, the home is spectacularly smelly?</p>
  </div>
);