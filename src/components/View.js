import React, { PureComponent } from 'react';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import { onDelete, onAdd } from './actions';

export default class View extends PureComponent {
  constructor(){
    super();
    this.state = {
      images: [
        { 
          _id: 1,
          title: 'Cute Bunny',
          description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
          url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
        },
        { 
          _id: 2,
          title: 'Cute Bunny2',
          description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
        },
        { 
          _id: 3,
          title: 'Cute Bunny3',
          description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
        }
      ],
      viewSelection:'thumbnail'
    };
  }

  handleViewChange(viewSelection){
    this.setState({ viewSelection });
  }

  handleDelete(imageId){
    this.setState(onDelete(imageId, this.state));
  }

    handleAdd = (imageData) => {
      this.setState(onAdd(imageData, this.state));
    }

    render(){
      const { images, viewSelection } = this.state;
      let view;
      (viewSelection === 'list') && (view = <List images={images} 
        handleDelete={imageId => this.handleDelete(imageId)}
        handleAdd={image => this.handleAdd(image)}/>);
      (viewSelection === 'thumbnail') && (view = <Thumbnail images={images}/>);
      (viewSelection === 'gallery') && (view = <Gallery images={images}/>);
      return(
        <div>
          <input type="button" value="list" onClick={({ target }) => this.handleViewChange(target.value)}/>
          <input type="button" value="thumbnail" onClick={({ target }) => this.handleViewChange(target.value)}/>
          <input type="button" value="gallery" onClick={({ target }) => this.handleViewChange(target.value)}/>
          { view }
        </div>
      );
    }
}
