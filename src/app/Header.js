import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends PureComponent{
  render() {
    return (
      <div>
        <header className="Header">
          <h1 className="App-title">Image Gallery</h1>
          <nav>
            <ul style ={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              <li type="none"><NavLink to="/about">About</NavLink></li>
              <li type="none"><NavLink to="/">Home</NavLink></li>
              <li type="none"><NavLink to="/images">Images</NavLink></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}