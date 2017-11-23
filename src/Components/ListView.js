import React, { PureComponent } from 'react';

export default class ListView extends PureComponent {
  render() {
    const { bunnies } = this.props;
    const images = bunnies.map((bunny, i) => {
      return (
        <tr key={i}>
          <td> <a href={bunny.url}>{bunny.title}:</a> {bunny.description}</td>
        </tr>
      );
    });
    
    return (
      <table className="table-center">
        <tbody>
          {images} 
        </tbody>
      </table>
    );
  }
}