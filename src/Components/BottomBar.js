import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './styles/BottomBar.css';

export default class BottomBar extends PureComponent {
  render() {
    return (
      <footer className="BottomBar">
        <div className="linkWrap">
          <Link to="/">Home</Link>
        </div>
        <div className="linkWrap">
          <Link to="/photos">Photos</Link>
        </div>
        <div className="linkWrap">
          <Link to="/minigame">Minigame</Link>
        </div>
      </footer>
    );
  }
}