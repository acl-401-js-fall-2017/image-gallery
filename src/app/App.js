import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  Link  } from 'react-router-dom';
import './App.css';
import Home from '../components/home';
import About from '../components/about';
import Albums from '../albums/albums';
import Images from '../images/images';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="topNav">
            <Link className="nav" to="/">Home</Link>
            <span> </span>
            <Link className="nav" to="/about">About</Link>
            <span> </span>
            <Link className="nav" to="/albums">View Albums</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/albums" component={Albums}/>
            <Route exact path="/images" render={(props)=><Images {...props}  isAlbum={false}/>}/>
            <Route  path="/albums/:id" render={(props)=><Images {...props}  isAlbum={true}/>}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;