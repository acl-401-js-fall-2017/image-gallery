import React, { Component } from 'react';
import Table from '../Table/Table';
import Deck from '../Deck/Deck';
import Gallery from '../Gallery/Gallery';

export default class Selector extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'TBD'
    };
  }

  handleSubmit(event) {
    
  } 




  render() {
    const {} = this.state;
    return (
      <form className="viewOptions" onSubmit={this.handleSubmit}>
        <p>Select your viewing method</p>
        <div>
          <input type="radio" name="viewFormat" id="viewChoice1" value={Table}/>
          <label for="viewChoice1">Table</label>
         
          <input type="radio" name="viewFormat" id="viewChoice2" value={Deck}/>
          <label for="viewChoice2">Cards</label>
          
          <input type="radio" name="viewFormat" id="viewChoice3" value={Gallery}/>
          <label for="viewChoice3">Gallery</label>
        </div>
        <div>
          <button type="submit" for="viewOptions">
            Submit
          </button>
        </div>
      </form>
    );
  }
}