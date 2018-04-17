import React from 'react';
import { Header, mapStateToProps, mapDispatchToProps } from '../Header';
import { shallow } from 'enzyme';
import { fetchRestaurantsBySearch 
} from '../../api/apiCalls/fetchRestaurantsBySearch';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { mockRestaurants, 
  returnedMockRestaurantApiData, 
  cleanRestaurantData } from '../../mockData/mockData';
import * as actions from '../../actions';

jest.mock('../../api/apiCalls/fetchRestaurantsBySearch');
jest.mock('../../api/helpers/restaurantsCleaner');

describe('Header', () => {
  let wrapper;
  const mockLocationOff = jest.fn();
  const mockAddRestaurants = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header addRestaurants={mockAddRestaurants} 
      locationOff={mockLocationOff} 
      restaurants={mockRestaurants} />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      searchValue: '',
      error: ''
    });
  });

  it('should update the state when handleChange is called', () => {
    const mockEvent = { target: { value: 'Hello World' } };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('searchValue')).toEqual('Hello World');
  });

  it('should call fetchRBS on handleSubmit with correct params', () => {
    wrapper.setState({ searchValue: 80227 });
    const expected = wrapper.state("searchValue");
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    expect(fetchRestaurantsBySearch).toHaveBeenCalledWith(expected);
  });

  it('should call restaurantsCleaner on handleSubmit w/ correct params', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    const expected = returnedMockRestaurantApiData;
    expect(restaurantsCleaner).toHaveBeenCalledWith(expected);
  });

  it('should call addRestaurants on handleSubmit w/ correct params', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    const expected = cleanRestaurantData;
    expect(mockAddRestaurants).toHaveBeenCalledWith(expected);
  });

  it('should call locationOff on handleSubmit with correct params', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockLocationOff).toHaveBeenCalledWith(false);
  });
});

describe("mapStateToProps", () => {
  it("correctly maps authUser to props", () => {
    const authUser = {name: 'Jimmy'};
    const expected = authUser;
    const mockState = { authUser };
    const mapped = mapStateToProps(mockState);
    expect(mapped.authUser).toEqual(expected);
  });

  it("correctly maps restaurants to props", () => {
    const restaurants = mockRestaurants;
    const expected = restaurants;
    const mockState = { restaurants };
    const mapped = mapStateToProps(mockState);
    expect(mapped.restaurants).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with correct params on addRestaurants', () => {
    const mockDispatch = jest.fn();
    const restaurants = mockRestaurants;
    const expected = actions.addRestaurants(restaurants)
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addRestaurants(restaurants);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params on locationOff', () => {
    const mockDispatch = jest.fn();
    const boolean = false;
    const expected = actions.locationOff(boolean);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.locationOff(boolean);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
