import React, { PureComponent } from 'react';
import { loadBunnies, addBunny, removeBunny } from './actions';


export default class BunnyList extends PureComponent {
  constructor() {
    super();
    this.state = {
      bunnies: []
    }; 
  }
	
  componentDidMount() {
    const newState = loadBunnies(this.state);
    this.setState(newState);
  }	

  handleAdd = title => {
    const newState = addBunny(this.state);
    this.setState(newState);
  }

  handleRemove = id => {
    const newState = removeBunny(this.state, id);
    this.setState(newState);
  }

  render() {
    const { bunnies } = this.state;

    return (
      <div></div>
    );
  }
}