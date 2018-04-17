import React from 'react';
import { Menu, mapStateToProps } from '../Menu';
import { shallow } from 'enzyme';
import { mockMenu, cleanRestaurantData } from '../../mockData/mockData';

describe('Menu', () => {
  let wrapper;
 

  beforeEach(() => {
    wrapper = shallow(<Menu restaurant={cleanRestaurantData} menu={mockMenu}/>);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('correctly maps menu to props', () => {
    const menu = mockMenu;
    const expected = menu;
    const mockState = { menu };
    const mapped = mapStateToProps(mockState);
    expect(mapped.menu).toEqual(expected);
  });

  it('correctly maps restaurants to props', () => {
    const restaurant = cleanRestaurantData;
    const expected = restaurant;
    const mockState = { restaurant };
    const mapped = mapStateToProps(mockState);
    expect(mapped.restaurant).toEqual(expected);
  });
});
