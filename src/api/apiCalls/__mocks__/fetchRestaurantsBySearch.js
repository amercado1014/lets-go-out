import { returnedMockRestaurantApiData } from "../../../mockData/mockData";

export const fetchRestaurantsBySearch = jest.fn().mockImplementation(() => {
  return Promise.resolve(returnedMockRestaurantApiData);
});
