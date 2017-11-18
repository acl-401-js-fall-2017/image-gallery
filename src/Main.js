import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { loadGallery, addImg, deleteImg } from './actions';
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

  setState(state, ignore = false){
    if(!ignore) {
      this.history.push(state);
      console.log('we are in not Ignore', this.history);
    }
    super.setState(state);
  }
  // kind of functioning but not really
  undo = () => {
    console.log('undo');
    if(!this.history.length) return;
    console.log('this state is:', this.state)
    this.history.pop();
    const last = this.history.pop();
    console.log('last state is:', last)
    this.setState(last, true);
  }
  
  addImage = img => {
    const newState = addImg(this.state, img)
    this.setState(newState);
  }
  
  deleteImage = id => {
    const newState = deleteImg(this.state, id)
    this.setState(newState)
  }
  
  changeView = ({ target }) => {
    console.log('changeView is happening', target.value);
    const newState = {
      ... this.state,
      view: target.value
    }
    this.setState(newState);
  }
  
  componentDidMount() {
    const newState = loadGallery(this.state);
    this.setState(newState);
    this.history = []
  }

  render() {
    const { gallery, view, showAdd } = this.state
    return (
      <div>
        <div>
          <div style ={{ display: 'flex', justifyContent: 'space-between', margin:'0 40%' }}>
            <select onChange ={this.changeView}>
              <option>Choose display style</option>
              <option value ={'thumbnail'}> Thumbnail </option>
              <option value ={'list'}> List </option>
              <option value ={'gallery'}> gallery </option>
            </select>
            <button
              disabled ={!this.history.length}
              onClick = {this.undo}>
              Undo
            </button>
          </div>
          <Thumbnail deleteImage = { this.deleteImage } gallery = { gallery } shouldDisplay = {view ==='thumbnail'}/>
          <List deleteImage = { this.deleteImage } gallery = { gallery } shouldDisplay = {view === 'list'}/>
          <Gallery deleteImage = { this.deleteImage } gallery = { gallery } shouldDisplay = {view === 'gallery'}/>
        </div>
        <NewImg addImage = { this.addImage }  shouldDisplay = {showAdd} />
      </div>
    );
  }
}