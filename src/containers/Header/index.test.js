import React from 'react';
import { Header } from '../Header';
import { shallow } from 'enzyme';
import { fetchRestaurantsBySearch 
} from '../../api/apiCalls/fetchRestaurantsBySearch';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { mockRestaurants } from '../../mockData/mockData';

jest.mock('../../api/apiCalls/fetchRestaurantsBySearch');
jest.mock('../../api/helpers/restaurantsCleaner');

describe('Header', () => {
  let wrapper;
  let mockAddRestaurants;
  let mockLocationOff;

  beforeEach(() => {
    mockAddRestaurants = jest.fn();
    mockLocationOff = jest.fn();
    wrapper = shallow(<Header addRestaurants={mockAddRestaurants} 
      locationOff={mockLocationOff} 
      restaurants={mockRestaurants} />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state of an empty string for searchValue', () => {
    expect(wrapper.state('searchValue')).toEqual('');
  });

  it('should update the state when handleChange is called', () => {
    const mockEvent = { target: { value: 'Hello World' } };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('searchValue')).toEqual('Hello World');
  });

  it('should call fetchRestaurantsBySearch on handleSubmit', () => {
    wrapper.setState({ searchValue: 80227 });
    const expected = wrapper.state("searchValue");
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    expect(fetchRestaurantsBySearch).toHaveBeenCalledWith(expected);
  });

  it('should call restaurantsCleaner on handleSubmit', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    expect(restaurantsCleaner).toHaveBeenCalled();
  });

  it.skip('should call addRestaurants on handleSubmit', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockAddRestaurants).toHaveBeenCalled();
  });
});
