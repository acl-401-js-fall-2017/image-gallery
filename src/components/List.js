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
        
        <table className='list'>
          <tbody>
            {this.props.bunnies.map((bunny, index) => {
              return (
                <tr key={index}>
                  <td><a href={bunny.url}>{bunny.title}</a></td>
                  <td>{bunny.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
}