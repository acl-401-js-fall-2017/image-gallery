import React, { PureComponent } from 'react';

import './AlbumThumb.css';

export default class AlbumThumb extends PureComponent {
  render() {
    const { album, onClick } = this.props;
    const randomImgIndex = Math.floor(Math.random() * album.photos.length);
    
    return (
      <article 
        className="AlbumThumb"
        onClick={() => onClick(album.name)}
      >
        <h3>{album.name}</h3>
        <div 
          className="albumThumbSlide"
          style={{ height: window.innerWidth / 4 }}
        >
          <img 
            src={album.photos[randomImgIndex].url} 
            alt={album.photos[randomImgIndex].description} 
            style={{ 
              minHeight: window.innerWidth / 4 ,
              width: window.innerWidth / 4 
            }}
          />
        </div>
      </article>
    );
  }
}