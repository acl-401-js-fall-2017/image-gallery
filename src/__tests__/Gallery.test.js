import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Bunnies from '../images/bunnies';
import Gallery from '../components/Gallery';

describe('List', () => {
  it('shows bunnies gallery format', () => {
    const wrapper = shallow(<Gallery bunnies={Bunnies}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});