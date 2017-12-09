import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

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
        <li><HeaderLink exact to="/albums">Albums</HeaderLink>
        </li>
      </nav>
      <Login>
        <li><Link to="/auth/login">Log In</Link></li>
        <li><Link to="/auth/signup">Sign Up</Link></li>
      </Login>
    </header> 
  );
}

const Login = styled.div`
  color: greenyellow;
  float: right;
`;