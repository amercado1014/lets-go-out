import React from 'react';
import { Restaurants } from '../Restaurants';
import { shallow } from 'enzyme';
import { cleanRestaurantData } from '../../mockData/mockData';

describe('Restaurants', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Restaurants restaurant={cleanRestaurantData} />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
