import React, { Component } from 'react';
import AddAlbum from './AddAlbum';
import { Link } from 'react-router-dom';

export default class Albums extends Component {
  render() {
    const { albums, removeAlbum, addAlbum } = this.props;
    return(
      <div className="center">
        <table>
          <tbody>
            {albums.map((album, i) => {
              const albumId = album._id;
              return (
                <tr key={i}>
                  <td><Link to={`/albums/${album._id}`}>{album.name}</Link></td>
                  <td><button onClick={() => removeAlbum(albumId)}> Remove </button></td>
                </tr>
              );
            })}

            <tr>
              <td></td>
              <td><AddAlbum add={newAlbum => addAlbum(newAlbum)}/></td>
              <td></td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}