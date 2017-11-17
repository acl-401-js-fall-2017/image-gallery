import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import Bunnies from '../images/bunnies';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

import { addImage, removeImage } from '../data/actions';


export default class View extends PureComponent {

  constructor() {
    super();
    this.state = {
      bunnies: Bunnies,
      // viewSelection: 'list'
    };
  }

  handleViewChange(value) {
    this.setState({
      viewSelection: value
    });
  }

  handleRemove = id => {
    const newState = removeImage(this.state, id);
    this.setState(newState);
  }

  handleAdd = image => {
    const newState = addImage(this.state, image);
    this.setState(newState);
  }


  render() {

    const displayView = {

      // home:<Home/>,

      list: <List bunnies={this.state.bunnies}
        removeImage={imageId => this.handleRemove(imageId)}
        addImage={image => this.handleAdd(image)}
      />,

      thumbnail: <Thumbnail bunnies={this.state.bunnies}/>,

      gallery: <Gallery bunnies={this.state.bunnies}/>

    };

    // const { viewSelection } = this.state;
    // let displayView;

    // (viewSelection === 'list') && (displayView = <List bunnies={this.state.bunnies} 
    //   removeImage={imageId => this.handleRemove(imageId)}
    //   addImage={image => this.handleAdd(image)}
    // />);
    // (viewSelection === 'thumbnail') && (displayView = <Thumbnail bunnies={this.state.bunnies}/>);
    // (viewSelection === 'gallery') && (displayView = <Gallery bunnies={this.state.bunnies}/>);
      

    return (
      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/list' render={() => displayView.list}/>
            {/* <Route exact path='/list' component={List}/> */}
            <Route exact path='/thumbnail' render={() => displayView.thumbnail}/>
            {/* <Route exact path='/thumbnail' component={Thumbnail}/> */}
            <Route exact path='/gallery' render={() => displayView.gallery}/>
            {/* <Route exact path='/gallery' component={Gallery}/> */}
            <Redirect to="/"/>
          </Switch>
        </div>
      </div>
    //   <div>
    //     <input type="button" value="list" onClick={({ target }) => this.handleViewChange(target.value)}/>
    //     <input type="button" value="thumbnail" onClick={({ target }) => this.handleViewChange(target.value)}/>
    //     <input type="button" value="gallery" onClick={({ target }) => this.handleViewChange(target.value)}/>
    //     { displayView }
    //   </div> 
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome to the Image Gallery Home page!</h1>
    <Link to="/images">View Images</Link>
  </div>
);