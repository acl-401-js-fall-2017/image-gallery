import React, { PureComponent } from 'react';
import Table from './Table';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

export default class Selector extends PureComponent {
  constructor() {
    super();
    this.state = {
      viewSelection: 'table'
    };

  }

  handleChange = event => {
    this.setState({ viewSelection: event.target.value });
  } 

  render() {
    const { viewSelection } = this.state;
    const { images } = this.props;
    let view;

    (viewSelection === 'table') && (view = <Table images={images} />);
    (viewSelection === 'thumbnail') && (view = <Thumbnail images={images} />);
    (viewSelection === 'gallery') && (view = <Gallery images={images} />);
    
    
    return (
      <div>
        <select className="Input" value={this.state.viewSelection} onChange={this.handleChange}>
          <option value="table">Table</option>
          <option value="thumbnail">Thumbnail</option>
          <option value="gallery">Gallery</option>
        </select>
        { view }
      </div>
    );
  }
}