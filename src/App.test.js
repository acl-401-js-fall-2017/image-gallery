import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';
import List from './List';
import View from './View';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot of View', () => {
  const tree = renderer.create(<View/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it ('renders a snapshot of List', () => {
  const tree = renderer.create(<List bunnies={[]} onRemove={() =>{}} onAddImg={() =>{}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it ('renders a snapshot of Thumbnail', () => {
  const tree = renderer.create(<Thumbnail bunnies={[]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it ('renders a snapshot of Gallery', () => {
  const bunny = {
    _id: 3454,
    title: 'Harlequin Bunny',
    description: 'This harlequin bunny artfully poses for a picture.',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
  };
  const tree = renderer.create(<Gallery bunnies={[bunny]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
<<<<<<< HEAD
=======

>>>>>>> upstream/mugworks

