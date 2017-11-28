import React from 'react';
import { NavLink  } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props} 
  className="button" 
  style={{ 'margin' : '0 11px' }}
  activeClassName="is-primary"
/>;

export default function Header() {
  console.log(this.props.match.params.id);
  return (
    <div>
      <HeaderLink exact to="/albums/:id/">List </HeaderLink>
      <HeaderLink to="/thumbnail">Thumbnail</HeaderLink>
      <HeaderLink to="/gallery">Gallery</HeaderLink>
    </div>
  );
}