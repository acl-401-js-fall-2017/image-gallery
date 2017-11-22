import React, { PureComponent } from 'react';

export default class ListView extends PureComponent {
  render() {
    const { bunnies } = this.props;
    const images = bunnies.map((bunny, i) => {
      const listItem = 
			<tr key={i}>
			  <a href={bunny.url}>{bunny.title}:</a>
			  <td>{bunny.description}</td>
			</tr>;
      return listItem ;
    });
		
    return (
      <table>
        <tbody>
          {images} 
        </tbody>
      </table>
    );
  }
}