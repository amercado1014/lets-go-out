import React from 'react';
import { Favorites, mapStateToProps } from '../Favorites';
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

describe('mapStateToProps', () => {
  it('correctly maps restaurants to props', () => {
    const favorites = mockRestaurants;
    const expected = favorites;
    const mockState = { favorites };
    const mapped = mapStateToProps(mockState);
    expect(mapped.favorites).toEqual(expected);
  });
});
