import React, { PureComponent } from 'react';
import Bunnies from './images/bunnies';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

export default class View extends PureComponent {
  constructor() {
    super();
    this.state = {
      images: Bunnies,
      viewSelection: 'list'
    };
  }

  handleViewChange(value) {
    this.setState({
      viewSelection: value
    });
  }

  render() {

    const { images, viewSelection } = this.state;
    let displayView;

    (viewSelection === 'list') && (displayView = <List images={images}/>)
    (viewSelection === 'thumbnail') && (displayView = <Thumbnail images={images}/>)
    (viewSelection === 'gallery') && (displayView = <Gallery images={images}/>)
      

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