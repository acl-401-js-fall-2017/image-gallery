import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import images from '../images';
import Thumbnail from './Thumbnail';

describe('List', () => {
  it('lists of thumbnails', () => {
    const wrapper = shallow(<Thumbnail images={images}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});