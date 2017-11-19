import React, { Component } from 'react';
import ListView from './Components/ListView';
import GalleryView from './Components/GalleryView';
import ThumbView from './Components/ThumbView';
import { Route, Switch } from 'react-router-dom';
import { removeBunny } from './actions';

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
    // let currentView;
    // (viewStyle === 'list') && (currentView = <ListView bunnies={bunnies} handleSubmit={this.handleAdd} handleDelete={this.handleRemove}/>);
    // (viewStyle === 'gallery') && (currentView = <GalleryView bunnies={bunnies}/>);
    // (viewStyle === 'thumbnail') && (currentView = <ThumbView bunnies={bunnies}/>);

    return (
      <div>
        {/* { currentView }
        <input className="button" type="button" value="Bunny List" onClick={(event) => this.handleViewChange('list')}/>
        <input className="button" type="button" value="Bunny Gallery" onClick={(event) => this.handleViewChange('gallery')}/>
        <input className="button" type="button" value="Bunny Thumbnail" onClick={(event) => this.handleViewChange('thumbnail')}/> */}
        <div>
          <Switch>
            <Route path="/list" render={() => currentView.list}/>
            <Route path="/gallery" render={() => currentView.gallery}/>
            <Route path="/thumbnail" render={() => currentView.thumbnail}/>
          </Switch>
        </div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/list">List</Link> */}
      </div>
    );
  }
}

export default View;
