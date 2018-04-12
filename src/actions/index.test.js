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
});