import React, { PureComponent } from 'react';
import { toggle } from '../actions';
import './styles/ImageManager.css';

export default class ImageManager extends PureComponent {
  constructor() {
    super();
    this.state = {
      open: {
        main: false,
        add: false,
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

  handleRemoval = e => {
    e.preventDefault();
    // const toRemove = e.target.map(ele => ele.value);
    const options = Array.from(e.target.removeSelector);
    this.props.onRemove(options.filter(o => o.selected).map(o => o.value));
  }

  render() {
    const { open } = this.state;
    const { images } = this.props;

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
                    <input name="url" type="text" placeholder="url" required="true"/>
                    <input name="title" type="text" placeholder="title" required="true"/>
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
                  <form
                    onSubmit={this.handleRemoval}
                    ref={form => this.form = form}
                  >
                    <select 
                      name="removeSelector"
                      defaultValue={[-1, -2]} 
                      multiple="multiple"
                      style={{
                        height: `${images.length * 1.5 + 3}em`
                      }}
                    >
                      <option disabled value='-1'>Select to Remove</option>
                      <option disabled value='-2'>&nbsp;&nbsp;&nbsp;(shift-click for multiple)</option>
                      {images.map((img, i) => {
                        return <option key={i} value={img._id}>{img.title}</option>
                      })}
                    </select>
                    <input className='submit' type="submit" name="submit"/>
                  </form>
                </section>
              }
            </div>
          </div>
        }
      </div>
    );
  }
}