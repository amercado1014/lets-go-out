import { fetchRestaurants } from '../fetchRestaurants';
import { mockRestaurantsApiData } from '../../../mockData/mockData';

describe('fetchRestaurants', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRestaurantsApiData)
      })
    );
  });

  it('calls fetch', () => {
    fetchRestaurants();
    expect(window.fetch).toHaveBeenCalled();
  });

});