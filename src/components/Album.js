import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import albumApi from '../service/album.api';
import { loadAlbums, addImage, removeImage } from '../data/actions';
import AddImage from '../components/AddImage';

export default class Album extends PureComponent {
    state = {
      images: []
    }

    async componentDidMount() {
      const albums = await albumApi.getById(this.props.match.params.id);
      const newState = loadAlbums(this.state, albums);
      this.setState(newState);
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

      return(
        <section>
          <h3> ALLLLBUUUUMMMMMSSSSS!!!!!!!!</h3>
          <ul className="items">
            {images.map(image => (
              <li key={image._id}>
                <Link to={`/albums/${image._id}`}>{image.title}</Link>
                <button onClick={() => this.handleRemove(image._id)}>X</button>
              </li>
            ))}
          </ul>
          <AddImage type="list" onAdd={this.handleAdd}/>
        </section>
      );
    }
}