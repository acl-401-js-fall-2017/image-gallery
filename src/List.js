import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { loadGallery } from './actions';
import imgApi from './services/imgApi';

export default class List extends PureComponent {
  state ={
    gallery: []
  }

  async componentDidMount() {
    const img = await imgApi.get();
    const newState = loadGallery(this.state, img);
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
    );
  }
}

const StyledDiv = styled.div`
display:'flex';
width: 90%;
justify-content:space-between;
`;