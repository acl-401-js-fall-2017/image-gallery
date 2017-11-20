import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
        <button type="submit">Add Bunny</button>
      </form>
    );
  }
}

AddBunny.propTypes = {
  handleSubmit: PropTypes.func
};