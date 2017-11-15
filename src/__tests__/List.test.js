import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Bunnies from '../images/bunnies';
import List from '../components/List';

describe('List', () => {
  it('lists of bunnies', () => {
    const wrapper = shallow(<list bunnies={Bunnies}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});