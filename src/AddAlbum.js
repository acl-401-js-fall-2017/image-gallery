import React, { Component } from 'react';

export default class AddAlbum extends Component {

  render() {

    const { add } = this.props;

    return(
      <div>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          const newAlbum = {
            name: elements.name.value,
          };
          elements.name.value = '';
          return add(newAlbum);
        }}>
          <input name="name" placeholder="Name" /> 
          <button type="submit">Add Album</button>
        </form>
      </div>
    );

  }
}