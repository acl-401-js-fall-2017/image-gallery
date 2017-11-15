import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class List extends PureComponent {
   
    static propTypes = {
      bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ul className='list'>
          {this.props.bunnies.map((bunny, index) => {
            return (
              <li key={index}>
                <a href={bunny.url}>{bunny.title}</a>
                <p>{bunny.description}</p>
              </li>
            );
          })}
        </ul>
      );
    }
}