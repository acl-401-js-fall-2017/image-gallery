import React, { PureComponent, Component } from 'react';

class AddImage extends PureComponent {
    render() {
      const { handleAdd } = this.props;
      return (
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          const imageData = {
              title: elements.title.value,
              url: elements.url.value,
              description: elements.description.value
          };
          handleAdd(imageData);
          elements.title.value = '';
          elements.title.url = '';
          elements.title.description = '';
        }}>
          <label>Title: </label>
          <input name="title" type="text" />
          <br/>
          <label>URL: </label>
          <input name="url" type="text" />
          <br/>
          <label>Description: </label>
          <input name="description" type="text"/>
          <br/>
          <button type="submit">Add</button>
        </form>
      ); 
  }
}



class List extends PureComponent {
    render(){
        const { images, handleDelete, handleAdd } =this.props;
        const list = images.map((image, i) => {
            const listItem = 
            <tr key={i}>
              <a href={image.url}>{image.title}:</a>
              <td>Description: {image.description}</td>
              <td><input data-value={image._id} type="button" value="remove" onClick ={({ target }) => handleDelete(target.dataset.value)}/></td>
            </tr>
		    return listItem;
        })
        
        return(
          <div>
            <table>
                <tbody>
                    {list}
                </tbody>
            </table>
            <AddImage handleAdd={handleAdd} />
          </div>
        );
    }
}

export default List;