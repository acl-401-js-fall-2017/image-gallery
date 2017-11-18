import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class NewImg extends PureComponent {
  render() {
    const { addImage, shouldDisplay } = this.props;
    return(
      <StyledForm shouldDisplay ={shouldDisplay}
      onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target
        const img ={
          title: elements.title.value,
          description: elements.description.value,
          url: elements.url.value
        }
        addImage(img);
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
display: ${ props => props.shouldDisplay ? 'flex' : 'none'};
flex-direction: column;
height: 130px;
justify-content: space-between;
width: 30%;
`;