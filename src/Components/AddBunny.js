import React, { PureComponent } from 'react';

export default class AddBunny extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        console.log('AAAAACCCCKKK', elements);
        const bunnyObj = { title: elements.title.value, description: elements.description.value, url: elements.url.value };
        handleSubmit(bunnyObj);
        elements.title.value = '';
      }}>
        <input name="title"/>
        <input name="description"/>
        <input name="url"/>
        <button type="submit">Add Bunny</button>
      </form>
    );
  }
}