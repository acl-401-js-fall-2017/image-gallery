import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { addImage } from '../utils/actions';
import imgApi from '../utils/services/imgApi';

export default class NewImg extends PureComponent {

  handleAdd = async (img) => {
    const image = await imgApi.add(img);
    console.log('we just fgot immage back',image);
    // const newState = addImage(this.state, list);
    // this.setState(newState);
  }

  render() {
    return(
      <StyledForm
        onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          const img ={
            title: elements.title.value,
            description: elements.description.value,
            url: elements.url.value
          };
          this.handleAdd(img);
          //elements.title.value = '';
        }}>
        <span>Add New Image to the gallery</span>
        <input name="title" placeholder="title"/>
        <input name="description" placeholder="description"/>
        <input name = "url" placeholder="url"/>
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