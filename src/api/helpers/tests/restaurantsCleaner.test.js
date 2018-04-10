import { restaurantsCleaner } from '../restaurantsCleaner';
import { returnedMockRestaurantApiData, 
  cleanRestaurantsArray } from '../../../mockData/mockData';

describe('restaurantsCleaner', () => {
  it('should clean a restaurants array', () => {
    const restaurants = restaurantsCleaner(returnedMockRestaurantApiData);
    expect(restaurants).toEqual(cleanRestaurantsArray);
  });
});