import React, { Component } from 'react';

export default class WonderList extends Component {
    
    render() {
      const { wonders } = this.props;
  
      return (
        <div className="list-view">
          {wonders.map((wonder, index) => (
            <div key={index} >
              <h2>{wonder.title}</h2>
              <img src={wonder.url} alt={wonder.title}/>
              <p>{wonder.description}</p>
            </div>
          ))}
        </div>
      );
  
    }
  
  }