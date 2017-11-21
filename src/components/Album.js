import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import albumApi from '../service/album.api';
import imagesApi from '../service/images.api';
import { loadAlbums, addImage, removeImage } from '../data/actions';
import AddImage from '../components/AddImage';

export default class Album extends PureComponent {
    state = {
      images: []
    }

    async componentDidMount() {
      const album = await albumApi.getById(this.props.match.params.id);
      this.setState(album);
    }

    handleAdd = async ({ title }) => {
      const album = await albumApi.add({ title });
      const newState = addImage(this.state, album);
      this.setState(newState);
    }

    handleRemove = async id => {
      await albumApi.remove(id);
      const newState = removeImage(this.state, id);
      this.setState(newState);
    }

    render() {
      const { images } = this.state;
      const { addImage } = this.props;

      return(
        <section>
          <h3> ALLLLBUUUUMMMMMSSSSS!!!!!!!!</h3>
          <ul className="items">
            {images.map(image => (
              <li key={image._id}>
                <Link to={`/albums/${image._id}`}>{image.title}</Link>
                <button onClick={() => this.handleRemove(image._id)}>x</button>
              </li>
            ))}
          </ul>
          <AddImage type="list" addImage={newImage => addImage(newImage)}/>
        </section>
      );
    }
}