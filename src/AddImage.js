import React, { PureComponent } from 'react';

export default function AddImage ({ handleOnSubmit }) {
  
    return (
        <div>
          <h2>Add a new wonder!</h2>
          <form onSubmit={event => {
              event.preventDefault();
              const { elements } = event.target;
              handleOnSubmit(elements.title.value, elements.description.value, elements.url.value);
          }}>
            <input type="text" name="title" placeholder="wonder title" required />
            <br/>
            <textarea rows="5" cols="60" name="description" placeholder="wonder description" required />
            <br/>
            <input type="url" name="url" placeholder="wonder image url" required />
            <br/>
            <button type="submit">Save</button>
          </form>
        </div>
      );
    
    }
  
  