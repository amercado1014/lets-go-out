import { cleanRestaurantData } from '../../../mockData/mockData';

export const restaurantsCleaner = jest.fn().mockImplementation(() => {
  return cleanRestaurantData;
});