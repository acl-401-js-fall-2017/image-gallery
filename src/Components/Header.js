import React from 'react';
import { NavLink } from 'react-router-dom';
import flops from '../image/flops.png';

const HeaderRoutes = props => <NavLink {...props} 
  className="nav-link"  activeClassName="active"/>;

export default function Header() {
  return (
    <header className="App-header">
      <nav>
        <li>
          <HeaderRoutes exact to='/'>Home</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes exact to='/about'>About</HeaderRoutes> 
        </li>
        <li>
          <HeaderRoutes to='/albums'>Albums</HeaderRoutes>
        </li>
        <li>
          <HeaderRoutes exact to='/images'>Images</HeaderRoutes> 
        </li>
      </nav>
      <img src={flops} className="App-logo" alt="logo" />
      {/* <h1 className="App-title">Welcome to a World of Bunnies</h1> */}
    </header>
  );
}