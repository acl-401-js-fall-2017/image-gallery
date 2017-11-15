import React, { Component } from 'react';

export default class WonderThumbnail extends Component {
  
  render() {
    const { wonders } = this.props;

    return (
      <div className="thumbnail-view">
        {wonders.map((wonder) => (
          <div key={wonder._id} >
            <img style={{ height:'200px'}} src={wonder.url} alt={wonder.title}/>
            <p>{wonder.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

