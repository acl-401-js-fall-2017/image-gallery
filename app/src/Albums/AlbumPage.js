import React, { PureComponent } from 'react';
import MultiAccordion from './MultiAccordion';
import Thumbnails from '../Photos/Thumbnails';
import { AddPhotosForm, RemovePhotosForm } from './AlbumForms';

import './AlbumPage.css';

export default class AlbumPage extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      photos: props.album.photos
    };
  }

  handleAddPhotos = target => {
    const photosToAdd = Array.from(target.addPhotosSelector.children).filter(opt => opt.selected).map(opt => opt.value);

  }

  render() {
    const { photos } = this.state;
    const { album: { name } } = this.props;
    return (
      <div>
        <header className="AlbumHeader">
          <h1>{name}</h1>
          <MultiAccordion >
            <AddPhotosForm 
              header="Add Photos"
              photosInAlbum={photos}
              onAddPhotos={this.handleAddPhotos}
            />
            <RemovePhotosForm
              header="Remove Photos"
            />
          </MultiAccordion>
        </header>
        <Thumbnails
          images={photos}
        />
      </div>
    );
  }
}