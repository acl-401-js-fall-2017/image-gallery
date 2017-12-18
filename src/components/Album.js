import React, { Component } from 'react';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      view: 'list',
      images: [],
      albums: []
    };
  }

//   componentDidMount() {
//     const newState = loadImages(this.state);
//     this.setState(newState);
//   }


  render() {
    const { albums } = this.state;
    return(
      <section>
        <ul>
          {albums.map((album) => {
            return (
              <li key={album._id}> {album.title} 
                < a href={album.url} >
                  {album.url}</a>
              </li>);
          })}
        </ul>   
      </section>
    );
  }
}
