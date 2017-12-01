import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import MultiAccordion from './MultiAccordion';
import Thumbnails from '../Photos/Thumbnails';
import { AddPhotosForm, RemovePhotosForm } from './AlbumForms';

import albumsApi from '../services/album-api';
import './AlbumPage.css';

class AlbumPage extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      photos: props.album.photos
    };
  }

  handlePhotos = operation => async target => {
    const { album } = this.props;
    const photosToAdd = Array.from(target.addPhotosSelector.children).filter(opt => opt.selected).map(opt => opt.value);
    const newAlbum = await albumsApi.patch(album._id, operation, photosToAdd);
    if(newAlbum && newAlbum.ok === 1) {
      const updatedAlbum = await albumsApi.get(album._id);
      this.setState({ ...this.state, photos: updatedAlbum.photos });
    }
  }

  handleDeleteAlbum = e => {
    e.preventDefault();
    this.props.onRemoveAlbum(this.props.album._id);
    this.props.history.push('/albums');
  }

  render() {
    const { photos } = this.state;
    const { album: { name } } = this.props;
    return (
      <div>
        <header className="AlbumHeader">
          <h1>{name}</h1>
          <MultiAccordion>
            <AddPhotosForm 
              header="Add Photos"
              photosInAlbum={photos}
              onAddPhotos={this.handlePhotos('add')}
            />
            <RemovePhotosForm
              header="Remove Photos"
              photosInAlbum={photos}
              onRemovePhotos={this.handlePhotos('remove')}
            />
          </MultiAccordion>
          <MultiAccordion menuName="X">
            <section header="Delete this Album">
              <form
                onSubmit={this.handleDeleteAlbum}
              >
                <input type="submit" name="submit"/>
              </form>
            </section>
          </MultiAccordion>
        </header>
        <Thumbnails
          images={photos}
        />
      </div>
    );
  }
}

export default withRouter(AlbumPage);