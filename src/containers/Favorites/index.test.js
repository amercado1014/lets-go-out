import React from 'react';
import { Favorites } from '../Favorites';
import { shallow } from 'enzyme';
import { mockRestaurants } from '../../mockData/mockData';

describe('Favorites', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Favorites favorites={mockRestaurants} />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
