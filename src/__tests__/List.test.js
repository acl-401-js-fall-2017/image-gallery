import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Bunnies from '../images/bunnies';
import List from '../components/List';

describe('List', () => {
  it('lists of bunnies', () => {
    const wrapper = shallow(<List bunnies={Bunnies}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});