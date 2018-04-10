import { mockLocationApiData } from "../../../mockData/mockData";

export const fetchLocation = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockLocationApiData });
});