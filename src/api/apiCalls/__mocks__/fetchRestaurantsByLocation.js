import { returnedMockRestaurantApiData } from "../../../mockData/mockData";

export const fetchRestaurantsByLocation = jest.fn().mockImplementation(() => {
  return Promise.resolve(returnedMockRestaurantApiData);
});
