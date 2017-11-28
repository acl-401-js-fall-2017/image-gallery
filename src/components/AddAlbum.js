import React, { PureComponent } from 'react';

export default class AddAlbum extends PureComponent {
  render() {
    const { onAdd, type, children } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const form = event.target;
        const { elements } = form;
        const obj = Object.entries(elements).reduce((obj, [key, input]) => {
          obj[key] = input.type === 'checkbox' ? input.checked : input.value;
          return obj;
        }, {});
        onAdd(obj);
        form.reset();
      }}>
        {children}
        <input name="title" placeholder="Album Name" />
        <button type="submit">Add Album {type}</button>
      </form>
    ); 
  }
}