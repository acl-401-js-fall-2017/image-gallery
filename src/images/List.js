import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { loadGallery, deleteImg } from '../utils/actions';
import imgApi from '../utils/services/imgApi';

export default class List extends PureComponent {
  state ={
    gallery: []
  }

  getAlbumId() {
    return this.props.match.params.id;
  }

  async componentDidMount() {
    const img = await imgApi.get(this.getAlbumId());
    const newState = loadGallery(this.state, img);
    this.setState(newState);
  }

  handleDelete = async id => {
    await imgApi.remove(id);
    const newState = deleteImg(this.state, id);
    this.setState(newState);
  }

  render() {
    return( 
      <StyledDiv>
        <ul>
          {this.state.gallery.map(img => (
            <div key={img._id} style ={{ display: 'flex', margin: '8px' }}>
              <DeleteDiv onClick={() => this.handleDelete(img._id)}>X</DeleteDiv>
              <li type= "none">{img.title}: {img.description}</li>
            </div>
          ))}
        </ul>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
display:'flex';
width: 90%;
justify-content:space-between;
`;

const DeleteDiv = styled.div`
border: 1px solid black;
margin-right: 1%;
`;