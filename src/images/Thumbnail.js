import React, { PureComponent } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { loadGallery, deleteImg } from '../utils/actions';
import imgApi from '../utils/services/imgApi';

export default class Thumbnail extends PureComponent {
  state ={
    gallery: []
  }

  getAlbumId() {
    console.log('this is id:',this.props.match.params.id);
    return this.props.match.params.id;
  }

  async componentDidMount() {
    const img = await imgApi.get(this.getAlbumId());
    console.log('img is:',img);
    const newState = loadGallery(this.state, img);
    this.setState(newState);
    console.log('thumbnail just maunted and we got',this.state);
  }

  handleDelete = async id => {
    await imgApi.remove(id);
    const newState = deleteImg(this.state, id);
    this.setState(newState);
  }


  render() {    
    return( 
      <StyledDiv>
        <ul style ={{ display: 'flex' }}>
          {this.state.gallery.map((img, i) => (
            <div key={img._id}>
              <div className ="thumbnailDiv">
                <DeleteDiv onClick={() => this.handleDelete(img._id)}>X</DeleteDiv>
                <img className ='galleryImg' src={img.url} alt=''/>
              </div>
            </div>
          ))}
        </ul>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
display: 'flex';
`;

const DeleteDiv = styled.div`
margin-left: 90%;
text-align: center;
border: 1px solid black;
`;

Thumbnail.propTypes = {
  gallery: propTypes.array,
  shouldDisplay: propTypes.bool,
  deleteImage: propTypes.func
};