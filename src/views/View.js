
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeImg } from '../actions';
import { addImg } from '../actions';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

const Views = {
  list: List,
  thumbnail: Thumbnail,
  gallery: Gallery
};
const views = Object.keys(Views);

class View extends Component {  
  constructor() {
    super();
    this.state = {
      bunnies: [],
    };
  }

  async componentDidMount() {
    const albumId = this.props.match.params.albumId;
    const bunnies = await fetch(`/api/images?album=${albumId}`).then(response => response.json());
    const newState = { ...this.state, bunnies };
    this.setState(newState);
  }

  handleUpdateView = (view) => {
    this.setState({ view });	
  }

  handleRemoveImg = async id => {
    await fetch(`/api/images/${id}`, {
      method: 'delete'
    }).then(response => response.json());
    const newState = removeImg(this.state, id);
    this.setState(newState);
  }

  handleAddImg = async bunny => {
    const bunnyImg = await fetch('/api/images', {
      method: 'post',
      body: JSON.stringify(bunny),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then(response => response.json());
    const newState = addImg(this.state, bunnyImg);
    this.setState(newState);
  }
   
  render() {
    const { bunnies } = this.state; 
    const albumId = this.props.match.params.albumId; 
    const { view = 'list' } = this.props.match.params;
    const SelectedView = Views[view];
    return (
      <div className="App">
        <p className="App-intro">
            Select which view of cute bunnies you would like.
        </p>
        {views.map((view) => <li key={view} className="links"><Link to={`/images/${view}`}>{view}</Link></li>)}            
        <SelectedView bunnies={bunnies} album={albumId} onRemove={this.handleRemoveImg} onAddImg={this.handleAddImg}/>
      </div>
    );
  }
}
export default View;

View.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  handleAddImg: PropTypes.func,
  handleRemoveImg: PropTypes.func,
  handleUpdateView: PropTypes.func,
  view: PropTypes.string
};