import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddImage from './AddImage';


export default class List extends PureComponent {
  render(){
    const { images, handleDelete, handleAdd, albumId } =this.props;
    console.log('current album id', albumId);
    console.log('album items', images);
    const list = !images ? null : images.map((image, i) => {
      console.log('full image obj', image);
      console.log('image d ', image.description);
      const listItem = 
            <tr key={i}>
              <td><a href={image.url}>{image.title}</a></td>
              <td>{image.description}</td>
              <td>
                <input data-value={image._id} type="button" value="remove"
                  onClick ={({ target }) => handleDelete(target.dataset.value)}/>
              </td>
            </tr>;
      return listItem;
    });
        
    return(
      <div>
        <table>
          <tbody>
            {list}
          </tbody>
        </table>
        <AddImage handleAdd={handleAdd} albumId={albumId} />
      </div>
    );
  }
}

List.propTypes = {
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
  images: PropTypes.array
};