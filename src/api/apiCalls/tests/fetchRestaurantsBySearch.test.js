import { fetchRestaurantsBySearch } from '../fetchRestaurantsBySearch';
import { mockRestaurantsApiData, 
  returnedMockRestaurantApiData } from '../../../mockData/mockData';

describe('fetchRestaurantsBySearch', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRestaurantsApiData)
      })
    );
  });

  it('should call fetch', () => {
    fetchRestaurantsBySearch();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should return fetched data', async () => {
    const expected = returnedMockRestaurantApiData;
    await expect(fetchRestaurantsBySearch()).resolves.toEqual(expected);
  });

  it('should throw an error if fetch has an error', () => {
    const expected = Error('Error fetching restaurants: ');
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    expect(fetchRestaurantsBySearch()).rejects.toEqual(expected);
  });
});