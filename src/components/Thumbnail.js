import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Thumbnail extends PureComponent {
    
    static propTypes = {
      bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    constructor() {
      super();
    }

    render() {
      return (
        <div className="thumbnail">
          {this.props.bunnies.map((bunny, index) => {
            return (
              <div key={index}>
                <img src={bunny.url} alt={bunny.title} height="100px"/>
                <h4>{bunny.title}</h4>
              </div>
            );
          })}
        </div>
      );
    }
}