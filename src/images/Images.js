import React, { PureComponent } from 'react';
//import styled from 'styled-components';
import {  
  Route, Switch, Redirect, 
  NavLink  } from 'react-router-dom';
import { loadGallery } from '../utils/actions';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';
import NewImg from './NewImg';
//import _ from 'lodash';

export default class Images extends PureComponent {
  constructor() {
    super();
    this.state = {
      gallery: [],
      view :'',
      showAdd: false,
      history: [],
    }; 
  }
  
  componentDidMount() {
    const newState = loadGallery(this.state);
    this.setState(newState);
  }

  getAlbumId() {
    return this.props.match.params.id;
  }
  
  render() { 
    return (
      <div style ={{ display: 'flex', flexDirection: 'column', }}>
        <nav>
          <ul style ={{ margin:' 0 35%', display: 'flex', justifyContent: 'space-between' }}>
            <li type="none"><NavLink to={`/albums/${this.getAlbumId()}/thumbnail`}> Thumbnail </NavLink></li>
            <li type="none"><NavLink to="/albums/:id/gallery"> Gallery </NavLink></li>
            <li type="none"><NavLink to="/albums/:id/list"> List </NavLink></li>
            <li type="none"><NavLink to="/albums/:id/newimg"> Add New Image </NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/albums/:id/newimg" component = {NewImg}/>
          <Route path='/albums/:id/thumbnail' component = {Thumbnail}/>
          <Route path="/albums/:id/gallery" component = {Gallery}/>
          <Route path="/albums/:id/list" component = {List}/>
        </Switch>
      </div>
    );
  }
}