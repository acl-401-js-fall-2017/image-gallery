import React, { PureComponent } from 'react';

export class AddAlbumForm extends PureComponent {
  render() {
    const { photosInAlbum } = this.props;
    return (
      <section>
        <form>
          <input type="text" placeholder="new album"/>
          <select
            value="-2"
            multiple="true"
          >
            <option disabled value="-2">Add Photos</option>
            <option disabled value="-1">&nbsp;&nbsp;&nbsp;(shift-click for multiple)</option>
            {photosInAlbum.map(photo => (
              <option value={photo._id}>{photo.title}</option>
            ))}
          </select>
        </form>
      </section>
    );
  }
}

export class RemoveAlbumForm extends PureComponent {
  render() {
    return (
      <section>that</section>
    );
  }
}

export class AddPhotosForm extends PureComponent {
  render() {
    const { onAddPhotos } = this.props;
    const { photosInAlbum } = this.props;
    return (
      <section>
        <form
          onSubmit={e => {
            e.preventDefault();
            onAddPhotos(e.target);
          }}
          ref={form => this.form = form}
        >
          <select
            name="addPhotosSelector"
            defaultValue={[-2, -1]}
            multiple="multiple"
          >
            <option disabled value="-2">Add Photos</option>
            <option disabled value="-1">&nbsp;&nbsp;&nbsp;(shift-click for multiple)</option>
            {photosInAlbum.map(photo => (
              <option key={photo._id} value={photo._id}>{photo.title}</option>
            ))}
          </select>
          <input className='submit' type="submit" name="submit"/>
        </form>
      </section>
    );
  }
}

export class RemovePhotosForm extends PureComponent {
  render() {
    return (
      <section>that</section>
    );
  }
}