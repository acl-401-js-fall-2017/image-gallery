import React, { PureComponent } from 'react';
import Table from './Table';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import AddImages from './AddImages';
import { PropTypes } from 'prop-types';

export default class Selector extends PureComponent {
  constructor() {
    super();
    this.state = {
      viewSelection: 'table'
    };

  }
  componentWillReceiveProps(nextProps) {
    if(nextProps._id === this.props._id) return;
  }
  handleViewChange = e => {
    this.setState({ viewSelection: e.target.value });
  } 

  
  render() {
    const { viewSelection } = this.state;
    const { images, onAdd, onRemove } = this.props;
    let view;

    (viewSelection === 'table') && (view = <Table images={images} onRemove={onRemove} />);
    (viewSelection === 'thumbnail') && (view = <Thumbnail images={images} />);
    (viewSelection === 'gallery') && (view = <Gallery images={images} />);
    (viewSelection === 'addImages') && (view = <AddImages images={images} onAdd={onAdd}/>);
    
    
    return (
      <div>
        <select className="Input" value={this.state.viewSelection} onChange={this.handleViewChange}>
          <option value="table">Table</option>
          <option value="thumbnail">Thumbnail</option>
          <option value="gallery">Gallery</option>
          <option value="addImages">Add Images</option>
        </select>
        { view }
      </div>
    );
  }
}

Selector.propTypes = {
  images: PropTypes.array
};