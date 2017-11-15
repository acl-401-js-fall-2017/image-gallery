import React, { PureComponent } from 'react';
import { loadbunnies } from 




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
}

handleAdd = title => {
	const newState = addBunnies(this.state, title);
	this.setState(newState);
}

handleRemove = id => {
	const newState = removeBunnies(this.state, id);
	this.setState(newState);
}

render() {
	const { bunnies } = this.state;

	return (
	<div>
		<h2>Hop, Hop, Hop</h2>
	</div>
	);
}