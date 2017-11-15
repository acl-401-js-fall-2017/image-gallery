import React, { PureComponent } from 'react';
import { toggle } from '../actions';
import './styles/ImageManager.css';

export default class ImageManager extends PureComponent {
  constructor() {
    super();
    this.state = {
      open: {
        main: true,
        add: true,
        remove: false
      }
    };
  }

  handleToggle = section => () => {
    const newState = toggle(this.state, section);
    this.setState(newState);
  }

  handleAddition = e => {
    e.preventDefault();
    const { target: { 
      url: { value: url },
      title: { value: title },
      description: { value: description }
    } } = e;
    this.props.onUpload({ url, title, description });
    e.target.reset();
  }

  render() {
    const { open } = this.state;
    return (
      <div className="ImageManager">
        <h2
          onClick={this.handleToggle('main')}
        ><strong>+</strong></h2>
        {
          open.main &&
          <div className="imageManagerDisplay">
            <div>
              <h4
                onClick={this.handleToggle('add')}
              >Add New Image</h4>
              {open.add &&
                <section>
                  <form
                    onSubmit={this.handleAddition}
                  >
                    <input name="url" type="text" placeholder="url"/>
                    <input name="title" type="text" placeholder="title"/>
                    <textarea name="description" placeholder="description"/>
                    <input className='submit' type="submit" name="submit"/>
                  </form>
                </section>
              }
            </div>
            <div>
              <h4
                onClick={this.handleToggle('remove')}
              >Remove Image</h4>
              {open.remove &&
                <section>
  here too
                </section>
              }
            </div>
          </div>
        }
      </div>
    );
  }
}