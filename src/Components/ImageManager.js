import React, { PureComponent } from 'react';
import { toggle } from '../actions';
import './styles/ImageManager.css';

export default class ImageManager extends PureComponent {
  constructor() {
    super();
    this.state = {
      open: {
        main: false,
        input: false,
        remove: false
      }
    };
  }

  handleToggle = section => () => {
    const newState = toggle(this.state, section);
    this.setState(newState);
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
              <h4>Add New Image</h4>
              <section>

              </section>
            </div>
            <div>
              <h4>Remove Image</h4>
              <section>

              </section>
            </div>
          </div>
        }
      </div>
    );
  }
}