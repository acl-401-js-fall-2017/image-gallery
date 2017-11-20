import React, { PureComponent } from 'react';
//import styled from 'styled-components';
import {  
  Route, Switch, Redirect, 
  NavLink  } from 'react-router-dom';
import { loadGallery } from './actions';
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

  render() {
    return (
      <div style ={{ display: 'flex', flexDirection: 'column', }}>
        <nav>
          <ul style ={{ margin:' 0 35%', display: 'flex', justifyContent: 'space-between' }}>
            <li type="none"><NavLink to="/images/thumbnail"> Thumbnail </NavLink></li>
            <li type="none"><NavLink to="/images/gallery"> Gallery </NavLink></li>
            <li type="none"><NavLink to="/images/list"> List </NavLink></li>
            <li type="none"><NavLink to="/images/newimg"> Add New Image </NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/images/newimg" component = {NewImg}/>
          <Route path="/images/thumbnail" component = {Thumbnail}/>
          <Route path="/images/gallery" component = {Gallery}/>
          <Route path="/images/list" component = {List}/>
          <Redirect to="/images"/>
        </Switch>
      </div>
    );
  }
}