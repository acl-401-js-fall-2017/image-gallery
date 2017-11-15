import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class List extends PureComponent {
  render() {
    const {gallery, shouldDisplay } =this.props
    return( 
      <StyledDiv shouldDisplay={shouldDisplay}>
        <ul>
          {this.props.gallery.map(img => (
            <li key={img._id}>{img.title}: {img.description}</li>
          ))}
        </ul>
      </StyledDiv>
    )
  };
}

const StyledDiv = styled.div`
display:${props => props.shouldDisplay ? 'flex' : 'none'};
`