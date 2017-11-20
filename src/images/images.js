// import React, { Component } from 'react';
// import '../App.css';
// import shortid from 'shortid';
// import ImageList from '../views/list';
// import ImageThumbnail from '../views/thumbnail';
// import ImageGallery from '../views/gallery';
// import AddImage from '../AddImage';
// import AddAlbum from '../AddAlbum';
// import { createImage, createAlbum } from '../actions';
// import {
//   Route,
//   Switch
// } from 'react-router-dom';
// import api from '../services/api';

// class Images extends Component {
//   constructor(){
//     super();
//     this.state = {
//       images: []
//     };
//   }
  
//   componentDidMount() {
//     api.getAlbums()
//       .then(res => {
//         this.setState({ albums: res });
//       })
//       .then(() => {
//         api.getImages()
//           .then(res => {
//             this.setState({ images: res });
//           });
//       })
//       .catch(error => console.log('error', error)); 
//   }
 
//   handleOnSubmitCreateImage = (title, description, url) => {
//     const newState = createImage(this.state, title, description, url);
//     this.setState(newState);
//   }

//   handleOnSubmitCreateAlbum = (title) => {
//     const newState = createAlbum(this.state, title);
//     this.setState(newState, ()=> console.table(this.state.albums));
//   }
  

//   render() {
//     const { images, albums } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Wonders of The World!!!</h1>
//         </header>
//         <div>
//           <Switch>
//             <Route exact path={`${this.props.match.url}/albums`} render={() => <AddAlbum albums={albums} handleOnSubmit={this.handleOnSubmitCreateAlbum}/>}/>  
//             <Route exact path={`${this.props.match.url}/addimages`} render={() => <AddImage handleOnSubmit={this.handleOnSubmitCreateImage}/>}/>
//             <Route exact path={`${this.props.match.url}/list`} render={() => <ImageList images={images}/>}/>
//             <Route exact path={`${this.props.match.url}/thumbnail`} render={() => <ImageThumbnail images={images}/>}/>
//             <Route exact path={`${this.props.match.url}/:gallery?`}  render={() => <ImageGallery images={images}/>}/>
//           </Switch>
//         </div>
        
//       </div>
//     );
//   }
// }

// export default Images;


import React, { PureComponent } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AddImage from '../forms/AddImage'; ///
import AddAlbum from '../forms/AddAlbum'; ///
import imageApi from '../services/image-api';
import { addImage, removeImage } from './image.actions';
import ImageList from '../views/list';
import ImageThumbnail from '../views/thumbnail';
import ImageGallery from '../views/gallery';

class Images extends PureComponent {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  // async componentDidMount() {
  //   const images = await imageApi.get(this.getAlbumId());
  //   this.setState({ images });
  // }

  getAlbumId() {
    return this.props.match.params.id;
  }

  handleAdd = async ({ title }) => {
    const image= await imageApi.add({ 
      album: this.getAlbumId(),
      title
    });
    const newState = addImage(this.state, image);
    this.setState(newState);
  }

  handleRemove = async image => {
    await imageApi.remove(image.album, image._id);
    const newState = removeImage(this.state, image._id);
    this.setState(newState);
  }

  render() {
    const { images, albums } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wonders of The World!!!</h1>
        </header>
        <div>
          <Switch>
            <Route exact path={`${this.props.match.url}/albums`} render={() => <AddAlbum albums={albums} handleOnSubmit={this.handleOnSubmitCreateAlbum}/>}/>  
            <Route exact path={`${this.props.match.url}/addimages`} render={() => <AddImage handleOnSubmit={this.handleOnSubmitCreateImage}/>}/>
            <Route exact path={`${this.props.match.url}/list`} render={() => <ImageList images={images}/>}/>
            <Route exact path={`${this.props.match.url}/thumbnail`} render={() => <ImageThumbnail images={images}/>}/>
            <Route exact path={`${this.props.match.url}/:gallery?`}  render={() => <ImageGallery images={images}/>}/>
          </Switch>
        </div>
        
      </div>
    );
  }
}

export default Images;