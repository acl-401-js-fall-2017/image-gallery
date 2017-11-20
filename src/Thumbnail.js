import React, { PureComponent } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types'
import { loadGallery } from './actions'

export default class Thumbnail extends PureComponent {
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
        <ul style ={{ display: 'flex' }}>
          {this.state.gallery.map((img, i) => (
            <div key={img._id}>
              <div className ="thumbnailDiv">
                <img className ='galleryImg' src={img.img} alt=''/>
              </div>
            </div>
          ))}
        </ul>
      </StyledDiv>
    )
  };
}

const StyledDiv = styled.div`
display: 'flex';
`;

Thumbnail.propTypes = {
  gallery: propTypes.array,
  shouldDisplay: propTypes.bool,
  deleteImage: propTypes.func
}