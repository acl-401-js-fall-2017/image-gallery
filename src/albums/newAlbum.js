import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { addAlbum } from '../utils/actions';
import albumsApi from '../utils/services/albumsApi';

export default class NewImg extends PureComponent {

  handleAdd = async (album) => {
    const newAlbum = await albumsApi.add(album);
    console.log('we just got album back', newAlbum);
    // const newState = addAlbum(this.state, list);
    // this.setState(newState);
  }

  render() {
    return(
      <StyledForm
        onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          const album ={
            name: elements.title.value,
            description: elements.description.value,
          };
          this.handleAdd(album);
          //elements.title.value = '';
        }}>
        <span>Add New Image to the gallery</span>
        <input name="title" placeholder="title"/>
        <input name="description" placeholder="description"/>
        <button type="submit">Add</button>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
display: 'flex';
flex-direction: column;
height: 130px;
justify-content: space-between;
width: 30%;
`;