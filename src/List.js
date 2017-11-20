import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { loadGallery } from './actions'

export default class List extends PureComponent {
  state ={
    gallery: []
  }

  componentDidMount() {
    const newState = loadGallery(this.state);
    this.setState(newState);
  }

  render() {
    return( 
      <StyledDiv>
        <ul>
          {this.state.gallery.map(img => (
            <div key={img._id} style ={{display: 'flex', margin: '8px'}}>
              <li type= "none">{img.title}: {img.description}</li>
            </div>
          ))}
        </ul>
      </StyledDiv>
    )
  };
}

const StyledDiv = styled.div`
display:'flex';
width: 90%;
justify-content:space-between;
`