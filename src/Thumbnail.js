import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class Thumbnail extends PureComponent {
  render() {
    const {gallery, shouldDisplay, deleteImage } =this.props
    return( 
      <StyledDiv shouldDisplay={shouldDisplay}>
        <ul style ={{ display: 'flex' }}>
          {this.props.gallery.map((img, i) => (
            <div>
              <div className ="thumbnailDiv">
                <div className="deleteDiv" onClick ={ () => deleteImage(img._id) }>x</div>
                <img className ='galleryImg' key={img._id} src={img.img} alt='image'/>
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
