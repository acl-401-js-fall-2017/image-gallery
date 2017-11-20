import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AddBunny from '../Components/AddBunny';
import View from '../View';
import ListView from '../Components/ListView';
import GalleryView from '../Components/GalleryView';
import ThumbView from '../Components/ThumbView';

const bunnies = [
  { 
    _id: '1',
    title: 'Halloween Bunny',
    description: 'Trick or treat?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
  { 
    _id: '2',
    title: 'Belly Bunny',
    description: 'I\'m a rub-my-belly bunny',
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
  { 
    _id: '3',
    title: 'Side-Eye Bunny',
    description: 'Were you taking to me?',
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' }
];

it('renders adding a new bunny snapshot', () => {
  const wrapper = shallow(<AddBunny/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('renders a View component snapshot', () => {
  const wrapper = shallow(<View/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('renders a list view snapshhot', () => {
  const wrapper = shallow(<ListView bunnies={bunnies}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('renders a gallery view snapshot', () => {
  const wrapper = shallow(<GalleryView bunnies={bunnies}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('renders a thumbnail view snapshot', () => {
  const wrapper = shallow(<ThumbView bunnies={bunnies}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
