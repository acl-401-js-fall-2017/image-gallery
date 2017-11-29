
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import { removeImg } from './actions';
import { addImg } from './actions';

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
      bunnies: [
        {
          _id: v1(),
          title: 'Harlequin Bunny',
          description: 'This harlequin bunny artfully poses for a picture.',
          url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        }, 
        {
          _id: v1(),
          title: 'Resting Rabbit',
          description: 'Ready to cuddle?',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg',
        },
        {
          _id: v1(),
          title: 'Snow Bunny',
          description: 'You would have trouble finding this bunny on a snowy day.',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg',
        },
      ],
      view: 'list'
    };
  }

  handleUpdateView = (view) => {
    this.setState({ view });	
  }
  
  handleRemoveImg = id => {
    const newState = removeImg(this.state, id);
    this.setState(newState);
  }

  handleAddImg = (elements) => {
    const newState = addImg(this.state, elements);
    this.setState(newState);
  }
  
  
  render() {
    const { bunnies, view } = this.state;
    const SelectedView = Views[view];
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Cute Bunnies!</h1>
        </header> */}
        {/* <div> */}
        <p className="App-intro">
            Select which view of cute bunnies you would like.
        </p>
        {views.map((view) => <button key={view} className="button" onClick={() => this.handleUpdateView(view)}>{view[0].toUpperCase()+view.slice(1)}</button>)}
          
          
        <SelectedView bunnies={bunnies} onRemove={this.handleRemoveImg} onAddImg={this.handleAddImg}/>
        {/* </div> */}
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