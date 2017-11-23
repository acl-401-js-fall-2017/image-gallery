import React from 'react';
import { NavLink  } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props} 
  className="button" 
  style={{ 'margin' : '0 11px' }}
  activeClassName="is-primary"
/>;

export default function Header() {
  return (
    <div>
      <HeaderLink exact to="/">List </HeaderLink>
      <HeaderLink to="/thumbnail">Thumbnail</HeaderLink>
      <HeaderLink to="/gallery">Gallery</HeaderLink>
    </div>
  );
}