import React, { PureComponent } from 'react';

class Table extends PureComponent {
  render() {
    const { images } = this.props;
    return (
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
        {images.map((image, i) => {
          return (
            <tr className="table-row" key={i}>
              <td><a href={image.url}>{image.title}</a></td>
              <td>{image.description}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}



export default Table;