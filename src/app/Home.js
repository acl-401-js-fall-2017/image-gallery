import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends PureComponent{
  render() {
    return (
      <div>
        <p>Welcome Home!</p>
        <Link to="/images"><p>Click Here to go to the Image Gallery!</p></Link>
        <Link to="/albums"><p>Click Here to go to albums!</p></Link>
      </div>
    );
  }
}