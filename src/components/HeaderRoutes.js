import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../logo.svg';

const HeaderRoutes = props => <NavLink {...props} 
  className="nav-link"
  activeClassName="active"
/>;

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <nav>
        <li>
          <HeaderRoutes to='/'>Home</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes to='/about'>About</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes to='/images'>Images</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes to='/albums'>Albums</HeaderRoutes>
        </li>
        {/* <li>
          <HeaderRoutes to="/images/list">List</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes to="/images/thumbnail">Thumbnail</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes to="/images/gallery">Gallery</HeaderRoutes>
        </li> */}
      </nav>
    </header>
  );
}