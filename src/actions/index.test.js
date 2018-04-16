import * as actions from './index';

describe('actions', () => {

  it('should create an action to add restaurants', () => {
    const restaurants = [{restaurant: 1}, {restaurant: 2}];
    const expectedAction = {
      type: 'ADD_RESTAURANTS',
      restaurants
    };
    expect(actions.addRestaurants(restaurants)).toEqual(expectedAction);
  });

  it('should create an action to add a menu', () => {
    const menu = [1, 2, 3];
    const expectedAction = {
      type: 'ADD_MENU',
      menu
    };
    expect(actions.addMenu(menu)).toEqual(expectedAction);
  });

  it('should create an action to add a restaurant', () => {
    const restaurant = {name: 'Dominos'};
    const expectedAction = {
      type: 'ADD_RESTAURANT',
      restaurant
    };
    expect(actions.addRestaurant(restaurant)).toEqual(expectedAction);
  });

  it('should create an action to set location off', () => {
    const boolean = true;
    const expectedAction = {
      type: 'LOCATION_OFF',
      boolean
    };
    expect(actions.locationOff(boolean)).toEqual(expectedAction);
  });

  it('should create an action to add user', () => {
    const user = { name: 'user'};
    const expectedAction = {
      type: 'ADD_USER',
      user
    };
    expect(actions.addUser(user)).toEqual(expectedAction);
  });

  it('should create an action to add favorite', () => {
    const favorite = { apiKey: '1234'};
    const expectedAction = {
      type: 'ADD_FAVORITE',
      favorite
    };
    expect(actions.addFavorite(favorite)).toEqual(expectedAction);
  });

  it('should create an action to remove favorite', () => {
    const apiKey = '5678klm';
    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      apiKey
    };
    expect(actions.removeFavorite(apiKey)).toEqual(expectedAction);
  });

  it('should create an action to reset favorites', () => {
    const expectedAction = {
      type: 'RESET_FAVORITES'
    };
    expect(actions.resetFavorites()).toEqual(expectedAction);
  });
});