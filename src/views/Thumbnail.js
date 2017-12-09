import React, { Component } from 'react';

export default class Thumbnail extends Component {
  render() {
    const { bunnies } = this.props;
    return(
      <div className="thumbnail">
        {bunnies.map((bunny) => <div key={bunny._id}><figcaption>{bunny.title}</figcaption><img className="thumbnail-img"  alt={bunny.title} src={bunny.url}/></div>)}
      </div>
    );
  }
}