import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class List extends PureComponent {
  render() {
    const {gallery, shouldDisplay } =this.props
    return( 
      <StyledDiv shouldDisplay={shouldDisplay}>
        <ul>
          {gallery.map(img => (
            <li style={ { margin: '8px'}} type= "none" key={img._id}>{img.title}: {img.description}</li>
          ))}
        </ul>
      </StyledDiv>
    )
  };
}

const StyledDiv = styled.div`
display:${props => props.shouldDisplay ? 'flex' : 'none'};
width: 90%;
justify-content:space-between;
`