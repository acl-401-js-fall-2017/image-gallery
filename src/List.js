import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class List extends PureComponent {
  render() {
    const {gallery, shouldDisplay, deleteImage } =this.props
    return( 
      <StyledDiv shouldDisplay={shouldDisplay}>
        <ul>
          {gallery.map(img => (
            <div style ={{display: 'flex', margin: '8px'}}>
              <DeleteDiv onClick ={ () => deleteImage(img._id) }>x</DeleteDiv>
              <li type= "none" key={img._id}>{img.title}: {img.description}</li>
            </div>
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

const DeleteDiv = styled.div`
margin-right: 15px;
border: 1px solid black;
padding: 0 3px;
`