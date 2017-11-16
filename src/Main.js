import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { loadGallery, addImg } from './actions';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';
import NewImg from './NewImg';

export default class Main extends PureComponent {
  constructor() {
    super();
    this.state = {
      gallery: [],
      view :'',
      showAdd: false
    };
    this.history = []; 
  }

  setState(state, ignore){
    if(!ignore) this.history.push(state);
    super.setState(state);
  }

  componentDidMount() {
    const newState = loadGallery(this.state);
    this.setState(newState);
    this.history = []
  }

  addImage = img => {
    const newState = addImg(this.state, img)
    this.setState(newState);
  }

  changeView = ({ target }) => {
    console.log('changeView is happening', target.value);
    const newState = {
      ... this.state,
      view: target.value
    }
    this.setState(newState);
  }

  render() {
    const { gallery, view, showAdd } = this.state
    return (
      <div>
        <div>
          <div>
            <select onChange ={this.changeView}>
              <option>Choose display style</option>
              <option value ={'thumbnail'}> Thumbnail </option>
              <option value ={'list'}> List </option>
              <option value ={'gallery'}> gallery </option>
            </select>
          </div>
          <Thumbnail gallery = { gallery } shouldDisplay = {view ==='thumbnail'}/>
          <List gallery = { gallery } shouldDisplay = {view === 'list'}/>
          <Gallery gallery = { gallery } shouldDisplay = {view === 'gallery'}/>
        </div>
        <NewImg addImage = { this.addImage }  shouldDisplay = {showAdd} />
      </div>
    );
  }
}