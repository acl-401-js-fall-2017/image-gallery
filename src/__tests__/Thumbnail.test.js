import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Bunnies from '../images/bunnies';
import Thumbnail from '../components/Thumbnail';

describe('List', () => {
  it('lists of bunnies in thumbnail format', () => {
    const wrapper = shallow(<Thumbnail images={Bunnies}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});