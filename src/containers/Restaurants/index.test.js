import React from 'react';
import { Restaurants } from '../Restaurants';
import { shallow } from 'enzyme';

describe('Restaurants', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Restaurants />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
