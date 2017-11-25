import React, { Component } from 'react';
import ListView from './ListView';
import GalleryView from './GalleryView';
import ThumbView from './ThumbView';
import { Route, Switch, NavLink } from 'react-router-dom';
import { removeBunny } from '../../data/viewActions';

class View extends Component {
  constructor() {
    super();
    this.state = {
      bunnies: [
        { 
          _id: '1',
          title: 'Halloween Bunny',
          description: 'Trick or treat?',
          url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
        { 
          _id: '2',
          title: 'Belly Bunny',
          description: 'I\'m a rub-my-belly bunny',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
        { 
          _id: '3',
          title: 'Side-Eye Bunny',
          description: 'Were you taking to me?',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' }
      ],
      viewStyle: 'list'
    };
  }
  
  handleViewChange(viewStyle) {
    this.setState({ viewStyle });
  }

  handleAdd = (newBunny) => {
    const copyView = [ ...this.state.bunnies ];
    copyView.push(newBunny);
    this.setState({ bunnies: copyView });
  }

  handleRemove = (id) => {
    const newState = removeBunny(this.state, id);
    this.setState(newState);
  }

  
  render() {

    const { bunnies } = this.state;
    const currentView = {
      
      list: <ListView bunnies={bunnies} 
        handleSubmit={this.handleAdd} 
        handleDelete={this.handleRemove}/>,

      gallery: <GalleryView bunnies={bunnies}/>,
      
      thumbnail: <ThumbView bunnies={bunnies}/>
    };

    const HeaderRoutes = props => <NavLink {...props} 
      className="nav-link"  activeClassName="active"/>;
    

    return (
      <div>
        <div>
          <li className="image-links">
            <HeaderRoutes exact to="/images/list">List</HeaderRoutes>
          </li>
          <li className="image-links">
            <HeaderRoutes exact to="/images/thumbnail">Thumbnail</HeaderRoutes>
          </li>
          <li className="image-links">
            <HeaderRoutes exact to="/images/gallery">Gallery</HeaderRoutes>
          </li>
          <Switch>
            <Route exact path="/images/list" render={() => currentView.list}/>
            <Route exact path="/images/gallery" render={() => currentView.gallery}/>
            <Route exact path="/images/thumbnail" render={() => currentView.thumbnail}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default View;
