import React, { PureComponent } from 'react';
import ListView from './Components/ListView';

class View extends PureComponent {
  constructor() {
    super();
    this.state = {
      bunnies: [
        { title: 'Halloween Bunny',
          description: 'Trick or treat?',
          url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
      	{ title: 'Belly Bunny',
          description: 'I\'m a rub-my-belly bunny',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
      	{ title: 'Side-Eye Bunny',
          description: 'Were you taking to me?',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' }
      ],
      viewStyle: 'list'
    };
  }
	
  render() {
    const { bunnies } = this.state;

    return (
      <ListView bunnies = {bunnies}/>
    );
  }
}

export default View;