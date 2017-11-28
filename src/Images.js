import React, { PureComponent } from 'react';
import albumApi from './services/album-api';
import imageApi from './services/image-api';
import { addImage, removeImage } from './images/images.actions';

import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

import { Route, NavLink  } from 'react-router-dom';


export default class Images extends PureComponent {
  constructor() {
    super();
    this.state = {
      images: [],
      imageIndex: 0
    };
  }

  async componentDidMount() {
    const { images }  = await albumApi.get(this.props.match.params.id);
    this.setState({ images });  }

  handleAdd = async ({ title, url, description }) => {
    const image = await imageApi.add({ 
      album: this.props.match.params.id,
      description,
      title,
      url 
    });
    const newState = addImage(this.state, image);
    this.setState(newState);
  }

  handleRemove = async image => {
    await imageApi.remove(image._id);
    const newState = removeImage(this.state, image._id);
    this.setState(newState);
  }

  changeImage(change) {
    if (change === 1 && this.state.imageIndex === this.state.images.length - 1) return;
    if (change === -1 && this.state.imageIndex === 0) return;
    this.setState({ imageIndex: this.state.imageIndex + change });
  }

  getAlbumId() {
    return this.props.match.params.id;
  }

  render() {
    const { images, imageIndex } = this.state;

    const ViewLink = props => <NavLink {...props} 
      className="button" 
      style={{ 'margin' : '0 11px' }}
      activeClassName="is-primary"
    />;

    const display = {
      list: <List images={images} 
        handleAdd={image => this.handleAdd(image)} 
        handleRemove={image=>this.handleRemove(image)} />,
        
      thumbnail: <Thumbnail images={images}/>,
      gallery: <Gallery images={images}
        imageIndex={imageIndex}
        changeImage={change=>this.changeImage(change)}/>
    };

    return (

      
      // <section>
      //   <h3>Hey you have {tasks.length} tasks</h3>
      //   <ul className="items">
      //     {tasks.map(task => (
      //       <Task key={task._id} task={task} 
      //         onRemove={this.handleRemove}
      //         onComplete={this.handleComplete}
      //       />
      //     ))}
      //   </ul>
      //   <AddItem onAdd={this.handleAdd}>
      //     <input name="title"/>
      //   </AddItem>
      // </section>
      <div>
        <ViewLink exact to={`/albums/${this.getAlbumId()}/`}>List </ViewLink>
        <ViewLink to={`/albums/${this.getAlbumId()}/thumbnail`}>Thumbnail</ViewLink>
        <ViewLink to={`/albums/${this.getAlbumId()}/gallery`}>Gallery</ViewLink>
        <div className='center'>
       
          <table>
          


            <Route exact path={`/albums/${this.getAlbumId()}/`} render={() => display.list}/>
            <Route path={`/albums/${this.getAlbumId()}/thumbnail`} render={() => display.thumbnail}/>
            <Route path={`/albums/${this.getAlbumId()}/gallery`} render={() => display.gallery}/>
            {/* 
            {images.map((image, i) => {
              return (
                <tr key={i}>
                  <td><a href={image.url}>{image.title}</a></td>
                  <td>{image.description}</td>
                  <td><button onClick={() => this.handleRemove(image)}> Remove </button></td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td><AddImage add={newImage => this.handleAdd(newImage)}/></td>
              <td></td>
            </tr> */}


          </table>
        </div>
      </div>
    );
  }
}