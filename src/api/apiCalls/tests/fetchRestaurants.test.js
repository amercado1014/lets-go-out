import { fetchRestaurants } from '../fetchRestaurants';
import { mockRestaurantsApiData, 
  returnedMockRestaurantApiData } from '../../../mockData/mockData';

describe('fetchRestaurants', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRestaurantsApiData)
      })
    );
  });

  it('should call fetch', () => {
    fetchRestaurants();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should return fetched data', async () => {
    const expected = returnedMockRestaurantApiData;
    await expect(fetchRestaurants()).resolves.toEqual(expected);
  });

  it('should throw an error if fetch has an error', () => {
    const expected = Error('Error fetching restaurants: ');
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    expect(fetchRestaurants()).rejects.toEqual(expected);
  });
});