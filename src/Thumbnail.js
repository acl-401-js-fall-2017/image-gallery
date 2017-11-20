import React, { PureComponent } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types'

export default class Thumbnail extends PureComponent {
  render() {
    const {gallery, shouldDisplay, deleteImage } =this.props
    return( 
      <StyledDiv shouldDisplay={shouldDisplay}>
        <ul style ={{ display: 'flex' }}>
          {gallery.map((img, i) => (
            <div key={img._id}>
              <div className ="thumbnailDiv">
                <div className="deleteDiv" onClick ={ () => deleteImage(img._id) }>x</div>
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
display:${props => props.shouldDisplay ? 'flex' : 'none'};
`;

Thumbnail.propTypes = {
  gallery: propTypes.array,
  shouldDisplay: propTypes.bool,
  deleteImage: propTypes.func
}