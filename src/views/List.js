import React, { Component } from 'react';

export default class List extends Component {  
  render() {
    const { bunnies, onRemove, onAddImg, album } = this.props;
    return(
      <div>
        <table id="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bunnies.map(bunny => <ListItem key={bunny._id} id={bunny._id} title={bunny.title} description={bunny.description} url={bunny.url} albumId={album} onRemove={onRemove}/>)}
          </tbody>
        </table>
        <AddImg onAddImg={onAddImg} albumId={album}/>   
      </div>
    );
  }
}

class ListItem extends Component {

  render() {
    const { id, title, description, url, onRemove } = this.props;
    return(
      <tr>
        <td><a href={url}>{ title }</a></td>
        <td>{ description }</td>
        <td><button className="button remove" onClick={() => onRemove(id)}>Remove</button></td>
      </tr>
    );
  }
}

class AddImg extends Component {
  render() {
    const { onAddImg, albumId } = this.props;
    return (
      <form id="form" onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        const addedImage = {
          title: elements.title.value,
          description: elements.description.value,
          url: elements.url.value,
          album: albumId
        };
        onAddImg(addedImage);
        elements.title.value='';
        elements.description.value='';
        elements.url.value='';
      }}>
        <fieldset>
          <legend>Add an image to this album</legend>
          <label>Image Title: </label>
          <input className="form-input" name="title"/>
          <label>Description: </label>
          <input className="form-input" name="description"/>
          <br/>
          <label>Url: </label>
          <input className="form-input" name="url"/>
          <button className="button add" type="submit">Add</button>
        </fieldset>
      </form>
    ); 
  }
}