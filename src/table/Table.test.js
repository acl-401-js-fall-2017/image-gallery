import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import images from '../images';
import Table from './Table';

describe('Table', () => {
  it('table of images', () => {
    const wrapper = shallow(<Table images={images}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});