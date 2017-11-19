import React from 'react';
import { NavLink } from 'react-router-dom';
import flops from '../image/flops.png';

const HeaderRoutes = props => <NavLink {...props} 
  className="nav-link"  activeClassName="active"/>;

export default function Header() {
  return (
    <header className="App-header">
      <img src={flops} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to a World of Bunnies</h1>
      <nav>
        <li>
          <HeaderRoutes to='/'>Home</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes to="/list">List</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes to="/thumbnail">Thumbnail</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes to="/gallery">Gallery</HeaderRoutes>
        </li>
      </nav>
    </header>
  );
}