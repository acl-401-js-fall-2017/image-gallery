import React, { PureComponent } from 'react';
import images from '../images';
import Table from './Table';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import AddImages from './AddImages';
import shortid from 'shortid';
import { PropTypes } from 'prop-types';

export default class Selector extends PureComponent {
  constructor() {
    super();
    this.state = {
      viewSelection: 'table',
      images
    };

  }
  componentWillReceiveProps(nextProps) {
    if(nextProps._id === this.props._id) return;
  }
  handleViewChange = e => {
    this.setState({ viewSelection: e.target.value });
  } 

  handleAdd = e => {
    this.setState({ images: e.target.value });
  }

  handleRemove = e => {
    this.setState({ images: e.target.value });
  }

  handleAddSubmit = e => {
    e.preventDefault();
    const { elements } = e.target;
    const newImage = {
      _id: shortid.generate(),
      title: elements.title.value,
      description: elements.description.value,
      url: elements.url.value
    };
    e.target.reset();
    
  }
  
  render() {
    const { viewSelection, images, handleAdd, handleRemove } = this.state;
    let view;

    (viewSelection === 'table') && (view = <Table images={images} onRemove={handleRemove} />);
    (viewSelection === 'thumbnail') && (view = <Thumbnail images={images} />);
    (viewSelection === 'gallery') && (view = <Gallery images={images} />);
    (viewSelection === 'addImages') && (view = <AddImages images={images} handleAdd={handleAdd}/>);
      
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