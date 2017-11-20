import React, { PureComponent } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { loadGallery } from './actions';
import imgApi from './services/imgApi';

export default class Thumbnail extends PureComponent {
  state ={
    gallery: []
  }

  async componentDidMount() {
    const img = await imgApi.get();
    const newState = loadGallery(this.state, img);
    this.setState(newState);
    console.log('thumbnail just maunted and we got',this.state);
  }

  render() {    
    return( 
      <StyledDiv>
        <ul style ={{ display: 'flex' }}>
          {this.state.gallery.map((img, i) => (
            <div key={img._id}>
              <div className ="thumbnailDiv">
                <img className ='galleryImg' src={img.url} alt=''/>
              </div>
            </div>
          ))}
        </ul>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
display: 'flex';
`;

Thumbnail.propTypes = {
  gallery: propTypes.array,
  shouldDisplay: propTypes.bool,
  deleteImage: propTypes.func
};