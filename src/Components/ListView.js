import React, { PureComponent } from 'react';
import AddBunny from './AddBunny';

export default class ListView extends PureComponent {
  render() {
    const { bunnies, handleSubmit } = this.props;
    const images = bunnies.map((bunny, i) => {
      return (
        <tr key={i}>
          <td> <a href={bunny.url}>{bunny.title}:</a> {bunny.description}</td>
        </tr>
      );
    });
    
    return (
      <div>
        <table className="table-center">
          <tbody>
            {images} 
          </tbody>
        </table>
        <AddBunny handleSubmit={handleSubmit}/>
        <form onSubmit={handleSubmit}></form>
      </div>
    );
  }
}