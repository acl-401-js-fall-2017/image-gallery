import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import View from './View';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';
import List from './List';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot', () => {
  // View.handleUpdateView('gallery');
  const tree = renderer.create(<View/>).toJSON();
  expect(tree).toMatchSnapshot();
});

// it ('renders a snapshot', () => {
//   const tree = renderer.create(<List/>).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// import React from 'react';
// import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
// import View from './View';

// describe('App', () => {

//   it('should render View View', () => {
//     const wrapper=shallow(<View/>);
//     expect(toJSON(wrapper)).toMatchSnapshot();
//   });
// });

// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import toJSON from 'enzyme-to-json';
// import { Gallery } from './Gallery';
// import View from './View';


// describe('App', () => {

  // it('should render Gallery View', () => {
  //   const wrapper=shallow(<Gallery valueLeft="true"/>);
  //   expect(toJSON(wrapper)).toMatchSnapshot();
  // });

//   it('renders a snapshot', () => {
//     // View.handleUpdateView('gallery');
//     const wrapper = shallow(<View/>);
//     expect(toJSON(wrapper)).toMatchSnapshot();
//   });
// });

