import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from '../App';
import { shallow } from 'enzyme';
import { fetchLocation } from '../../api/apiCalls/fetchLocation';
import { fetchRestaurantsByLocation 
} from '../../api/apiCalls/fetchRestaurantsByLocation';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { mockRestaurants } from '../../mockData/mockData';
import * as actions from '../../actions';

jest.mock('../../api/apiCalls/fetchLocation');
jest.mock('../../api/apiCalls/fetchRestaurantsByLocation');
jest.mock('../../api/helpers/restaurantsCleaner');

describe('App', () => {
  let wrapper;
  let mockAddUser;
  const mockAddRestaurants = jest.fn();
  const mockLocationOff = jest.fn();

  beforeEach(() => {
    mockAddUser = jest.fn();
    wrapper = shallow(<App addRestaurants={mockAddRestaurants} 
      locationOff={mockLocationOff} 
      addUser={mockAddUser} />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an empty string as default state for error', () => {
    expect(wrapper.state('error')).toEqual('');
  });

  it('should call fetchLocation on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(fetchLocation).toHaveBeenCalled();
  });

  it('should call fetchRestaurantsByLocation on componentDidMount', () => { 
    wrapper.instance().componentDidMount();
    expect(fetchRestaurantsByLocation).toHaveBeenCalled();
  });

  it('should call restaurantsCleaner on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(restaurantsCleaner).toHaveBeenCalled();
  });

  it('should call addRestaurants on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(mockAddRestaurants).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {
  it('correctly maps restaurants to props', () => {
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

  it('should call dispatch with correct params on addUser', () => {
    const mockDispatch = jest.fn();
    const user = {name: 'Jimmy'};
    const expected = actions.addUser(user);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addUser(user);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});