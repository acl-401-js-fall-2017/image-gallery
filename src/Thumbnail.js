import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class Thumbnail extends PureComponent {
  render() {
    const {gallery, shouldDisplay } =this.props
    return( 
      <StyledDiv shouldDisplay={shouldDisplay}>
        <ul>
          {this.props.gallery.map(img => (
            <img className ='galleryImg' key={img._id} src={img.img} alt='image'/>
          ))}
        </ul>
      </StyledDiv>
    )
  };
}

const StyledDiv = styled.div`
display:${props => props.shouldDisplay ? 'flex' : 'none'};
`;