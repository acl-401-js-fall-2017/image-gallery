import React, { PureComponent } from 'react';
//import styled from 'styled-components';
import { loadGallery, addImg, deleteImg } from './actions';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';
import NewImg from './NewImg';
import _ from 'lodash';

export default class Main extends PureComponent {
  constructor() {
    super();
    this.state = {
      gallery: [],
      view :'',
      showAdd: false,
      history: [],
    }; 
  }
  
  // kind of functioning but not really
  undo = () => {  
    const last = _.cloneDeep(_.last(this.state.history))
    //const last = _(this.state.history).last().cloneDeep().value()
    this.setState( last )
  }
  
  addImage = img => {
    const currentHistory = [...this.state.history, this.state]
    const newState = addImg(this.state, img)
    newState.history = currentHistory;
    this.setState(newState)
  }
  
  deleteImage = id => {
    const currentHistory = [...this.state.history, this.state]
    const newState = deleteImg(this.state, id)
    newState.history = currentHistory;
    this.setState(newState)
  }
  
  changeView = ({ target }) => {
    const currentHistory = [...this.state.history, this.state]
    this.setState({ view: target.value, history: currentHistory });
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
              disabled ={!this.state.history.length}
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

