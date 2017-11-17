import React, { PureComponent } from 'react';
import Table from './Table';
import Deck from './Deck';
import Gallery from './Gallery';

export default class Selector extends PureComponent {
  constructor() {
    super();
    this.state = {
      viewSelection: 'table'
    };

  }

  handleSubmit(event) {
    this.setState({ viewSelection: event.target.value });
  } 

  render() {
    const { viewSelection } = this.state;
    const { images } = this.props;
    let view;

    (viewSelection === 'table') && (view = <Table images={images} />);
    
    
    return (
      <div>
        <select className="Input" value={this.state.viewSelection} onChange={this.handleChange}>
          <option value="table">Table</option>
          <option value="deck">Deck</option>
          <option value="gallery">Gallery</option>
        </select>
        { view }
      </div>
    );
  }
}