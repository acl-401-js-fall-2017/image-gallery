import React, { PureComponent } from 'react';

import Bunnies from '../images/bunnies';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

export default class View extends PureComponent {

  constructor() {
    super();
    this.state = {
      bunnies: Bunnies,
      viewSelection: 'list'
    };
  }

  handleViewChange(value) {
    this.setState({
      viewSelection: value
    });
  }

  render() {

    const { viewSelection } = this.state;
    let displayView;

    (viewSelection === 'list') && (displayView = <List bunnies={this.state.bunnies}/>);
    (viewSelection === 'thumbnail') && (displayView = <Thumbnail bunnies={this.state.bunnies}/>);
    (viewSelection === 'gallery') && (displayView = <Gallery bunnies={this.state.bunnies}/>);
      

    return (
      <div>
        <input type="button" value="list" onClick={({ target }) => this.handleViewChange(target.value)}/>
        <input type="button" value="thumbnail" onClick={({ target }) => this.handleViewChange(target.value)}/>
        <input type="button" value="gallery" onClick={({ target }) => this.handleViewChange(target.value)}/>
        { displayView }
      </div> 
    );
  }

}