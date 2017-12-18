import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { loadGallery } from './actions';

export default class Gallery extends PureComponent {
  state = { 
    index: 0, 
    gallery:[]
  }

  componentDidMount() {
    const newState = loadGallery(this.state);
    this.setState(newState);
  }

  handleClick = (value) => {
    console.log('clicked');
    const newState = {
      ...this.state,
      index: this.state.index + value
    }
    this.setState(newState);
  }

  render() {
    return( 
      <StyledDiv>
        <div>
          {this.state.gallery.map((img, i) => (
            <ImgDiv key={img._id} shouldDisplay ={this.state.index === i}>
              <span> {img.title} </span>
              <img style={{ width:'100%' }} src={img.img} alt=''/>
              <span> {img.description} </span>
              { i !== this.state.gallery.length -1 && <span onClick ={()=> this.handleClick(1)}> next </span>}
              {i !== 0 && <span onClick ={()=> this.handleClick(-1)}> previous</span>}
            </ImgDiv>
          ))}
        </div>
      </StyledDiv>
    )
  };
}

const StyledDiv = styled.div`
display: 'flex';
`;

const ImgDiv = styled.div`
display:${props => props.shouldDisplay ? 'flex' : 'none'};
flex-direction: column;
margin: 0 10%;
`;