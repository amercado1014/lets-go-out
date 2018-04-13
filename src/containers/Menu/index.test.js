import React from 'react';
import { Menu } from '../Menu';
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
