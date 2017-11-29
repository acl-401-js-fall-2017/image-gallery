import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props}
  className="navLink"
  activeClassName="active"
/>;

export default function Header() {
  return(
    <header className="App-header">
      <h1 className="App-title">Cute Bunnies!</h1>
      <nav>
        <li><HeaderLink exact to="/">Home</HeaderLink>
        </li>
        <li><HeaderLink exact to="/about">About</HeaderLink>
        </li>
        <li><HeaderLink exact to="/images">Images</HeaderLink>
        </li>
      </nav>
    </header> 
  );
}