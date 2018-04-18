/* eslint-disable max-len */
import { fetchRestaurantsByLocation } from "../fetchRestaurantsByLocation";
import {
  mockRestaurantsApiData,
  returnedMockRestaurantApiData
} from "../../../mockData/mockData";

describe("fetchRestaurantsByLocation", () => {
  let location;

  beforeEach(() => {
    location = { 
      lat: 39.7047095, 
      lng: -105.08137339999999 
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRestaurantsApiData)
      })
    );
  });

  it("should call fetch", () => {
    fetchRestaurantsByLocation(location);
    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return fetched data", async () => {
    const expected = returnedMockRestaurantApiData;
    await expect(fetchRestaurantsByLocation(location)).resolves.toEqual(expected);
  });

  it("should throw an error if fetch has an error", async () => {
    const expected = Error("Error fetching restaurants: Error");
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        details: 'Error'
      })
    );
    await expect(fetchRestaurantsByLocation(location)).rejects.toEqual(expected);
  });
});
