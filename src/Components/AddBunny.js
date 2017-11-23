import React, { PureComponent } from 'react';

export default class AddBunny extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        const bunnyObj = { title: elements.title.value, description: elements.description.value, url: elements.url.value };
        handleSubmit(bunnyObj);
        elements.title.value = '';
        elements.description.value = '';
        elements.url.value = '';
      }}>
        <label style={{ padding: '20px' }}>
          Title:
          <input name="title"/>
        </label>
        <label style={{ padding: '20px' }}>
          Description:
          <input name="description"/>
        </label>
        <label style={{ padding: '20px' }}>
          URL:
          <input name="url"/>
        </label>
        <button className="button" type="submit" >Add Bunny</button>
      </form>
    );
  }
}