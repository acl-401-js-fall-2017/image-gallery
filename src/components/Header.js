
import React from 'react';
import { NavLink  } from 'react-router-dom';


const HeaderLink = props => <NavLink {...props} 
  className="nav-link" 
  activeClassName="active"
/>;



export default function Header() {
  const viewLinks = 
  <nav>
    <li>
      <HeaderLink exact to="/">Gallery</HeaderLink>
    </li>
    <li>
      <HeaderLink to="/images">List</HeaderLink>
    </li>
    <li>
      <HeaderLink to="/about">Thumbnail</HeaderLink>
    </li>
  </nav>;
  return (
    <header className="App-header">
      <h1 className="App-title">Image gallery</h1>
      <nav>
        <li>
          <HeaderLink exact to="/">Home</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/images">images</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/about">about</HeaderLink>
        </li>
      </nav>
    </header>
  );
}

