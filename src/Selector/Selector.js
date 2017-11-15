import React, { Component } from 'react';

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'TBD'
    };
  }

  render() {
    const {} = this.state;
    return (
      <form className="Buttons">
        <p>Select your viewing method</p>
        <div>
          <input type="radio" name="viewFormat" id="viewChoice1" value={}/>
          <label for="viewChoice1">Table</label>
         
          <input type="radio" name="viewFormat" id="viewChoice2" value={}/>
          <label for="viewChoice2">Cards</label>
          
          <input type="radio" name="viewFormat" id="viewChoice3" value={}/>
          <label for="viewChoice3">Gallery</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}