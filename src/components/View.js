import React, { PureComponent } from 'react';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import imageApi from '../services/imageAPI';
import { onDelete, onAdd } from './actions';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  NavLink } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props} 
  className="nav-link" 
  activeClassName="active"
/>;

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
    };
  }
  handleDelete(imageId){
    this.setState(onDelete(imageId, this.state));
  }

    handleAdd = (imageData) => {
      this.setState(onAdd(imageData, this.state));
    }

    render(){
      const { images } = this.state;
      return(
        <Router>
          <div>
            <nav>
              <li>
                <HeaderLink exact to="/images/gallery">Gallery</HeaderLink>
              </li>
              <li>
                <HeaderLink to="/images/list">List</HeaderLink>
              </li>
              <li>
                <HeaderLink to="/images/thumbnail">Thumbnail</HeaderLink>
              </li>
            </nav>
            <Switch>
              <Route exact path="/images/gallery" render={() => <Gallery images={images} {...this.props} />}/>
              <Route exact path="/images/thumbnail" render={() => <Thumbnail images={images} {...this.props} />}/>
              <Route exact path="/images/list" render={() => <List images={images} 
                handleDelete={imageId => this.handleDelete(imageId)}
                handleAdd={image => this.handleAdd(image)} {...this.props} />}/>
              <Redirect to="/images/gallery"/>
            </Switch>
          </div>
        </Router>
      );
    }
}
