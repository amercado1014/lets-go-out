import React from 'react';
import { Restaurants,
  mapStateToProps, 
  mapDispatchToProps } from '../Restaurants';
import { shallow } from 'enzyme';
import { cleanRestaurantData, mockMenu } from '../../mockData/mockData';
import { fetchMenu } from '../../api/apiCalls/fetchMenu';
import * as actions from '../../actions';

jest.mock('../../api/apiCalls/fetchMenu');

describe('Restaurants', () => {
  let wrapper;
  let mockAddFavorite;
  let mockRemoveFavorite;
  const mockAddMenu = jest.fn();
  const mockAddRestaurant = jest.fn();
  const mockHistory = { push: jest.fn() };

  beforeEach(() => {
    mockAddFavorite = jest.fn();
    mockRemoveFavorite = jest.fn();
    wrapper = shallow(<Restaurants restaurant={cleanRestaurantData} 
      addMenu={mockAddMenu}
      addRestaurant={mockAddRestaurant}
      addFavorite={mockAddFavorite}
      removeFavorite={mockRemoveFavorite} 
      history={mockHistory}/>);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an empty string as default state for error', () => {
    expect(wrapper.state('error')).toEqual('');
  });

  it('should call fetchMenu on handleClick with correct params', () => {
    wrapper.instance().handleClick();
    expect(fetchMenu).toHaveBeenCalledWith(cleanRestaurantData.apiKey);
  });

  it('should call addMenu on handleClick with correct params', () => {
    wrapper.instance().handleClick();
    expect(mockAddMenu).toHaveBeenCalledWith({mockMenu});
  });

  it('should call addRestaurant on handleClick with correct params', () => {
    wrapper.instance().handleClick();
    expect(mockAddRestaurant).toHaveBeenCalledWith(cleanRestaurantData);
  });

  it('should call history.push with correct params on handleClick', () => {
    wrapper.instance().handleClick();
    expect(mockHistory.push).toHaveBeenCalledWith('/menu');
  });

  it('should call addFavorite on addFavorite with correct params', () => {
    wrapper.instance().addFavorite();
    const expected = cleanRestaurantData;
    expect(mockAddFavorite).toHaveBeenCalledWith(expected);
  });

  it('should call removeFavorite on removeFavorite with correct params', () => {
    const wrapper = shallow(<Restaurants restaurant={cleanRestaurantData} 
      removeFavorite={mockRemoveFavorite} 
      isFavorite={true}/>);
    wrapper.instance().removeFavorite();
    const expected = cleanRestaurantData.apiKey;
    expect(mockRemoveFavorite).toHaveBeenCalledWith(expected);
  });

  it('should call addFavorite on handleFavorite', () => {
    wrapper.instance().addFavorite();
    expect(mockAddFavorite).toHaveBeenCalled();
  });

  it('should call removeFavorite on handleFavorite', () => {
    const wrapper = shallow(<Restaurants restaurant={cleanRestaurantData} 
      removeFavorite={mockRemoveFavorite} 
      isFavorite={true} />);
    wrapper.instance().removeFavorite();
    expect(mockRemoveFavorite).toHaveBeenCalled();
  });
});

describe("mapStateToProps", () => {
  it("correctly maps authUser to props", () => {
    const authUser = { name: "Jimmy" };
    const expected = authUser;
    const mockState = { authUser };
    const mapped = mapStateToProps(mockState);
    expect(mapped.authUser).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with correct params on addMenu', () => {
    const mockDispatch = jest.fn();
    const menu = mockMenu;
    const expected = actions.addMenu(menu);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addMenu(menu);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params on addRestaurant', () => {
    const mockDispatch = jest.fn();
    const restaurant = cleanRestaurantData;
    const expected = actions.addRestaurant(restaurant);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addRestaurant(restaurant);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params on addFavorite', () => {
    const mockDispatch = jest.fn();
    const restaurant = cleanRestaurantData;
    const expected = actions.addFavorite(restaurant);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addFavorite(restaurant);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with the correct params on removeFavorite', () => {
    const mockDispatch = jest.fn();
    const apiKey = cleanRestaurantData.apiKey;
    const expected = actions.removeFavorite(apiKey);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeFavorite(apiKey);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
