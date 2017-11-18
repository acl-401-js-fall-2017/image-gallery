import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class Thumbnail extends PureComponent {
  constructor() {
    super();
    this.state= { index: 0}
    this.history =[];
  }

  setState(state, ignore) {
    if(!ignore) this.history.push(state);
    super.setState(state);
  }

  handleClick = (value) =>{
    console.log('clicked');
    const newState ={
      ...this.state,
      index: this.state.index + value
    }
    this.setState(newState);
  }
  render() {
    const {gallery, shouldDisplay } =this.props
    return( 
      <StyledDiv shouldDisplay={shouldDisplay}>
        <div>
          {this.props.gallery.map((img, i) => (
            <ImgDiv shouldDisplay ={this.state.index === i}>
              <span> {img.title} </span>
              <img style={{ width:'100%' }} key={img._id} src={img.img} alt='image'/>
              <span> {img.description} </span>
              { i !== gallery.length -1 && <span onClick ={()=> this.handleClick(1)}> next </span>}
              {i !== 0 && <span onClick ={()=> this.handleClick(-1)}> previous</span>}
            </ImgDiv>
          ))}
        </div>
      </StyledDiv>
    )
  };
}

const StyledDiv = styled.div`
display:${props => props.shouldDisplay ? 'flex' : 'none'};
`;

const ImgDiv = styled.div`
display:${props => props.shouldDisplay ? 'flex' : 'none'};
flex-direction: column;
margin: 0 10%;
`;

