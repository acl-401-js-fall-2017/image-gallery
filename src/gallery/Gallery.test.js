import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import images from '../images';
import Gallery from '../components/Gallery';

describe('List', () => {
  it('shows gallery', () => {
    const wrapper = shallow(<Gallery images={images}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});