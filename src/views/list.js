import React, { Component } from 'react';

export default class WonderList extends Component {
    
    render() {
      const { wonders } = this.props;
  
      return (
        <div className="list-view">
          {wonders.map((wonder) => (
            <div key={wonder._id} >
              <h2>{wonder.title}</h2>
              <img style={{ height:'200px'}} src={wonder.url} alt={wonder.title}/>
              <p>{wonder.description}</p>
            </div>
          ))}
        </div>
      );
  
    }
  
  }