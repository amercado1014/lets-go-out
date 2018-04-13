import reducer from '../restaurantsReducer';
import * as actions from '../../actions';

describe('restaurants reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return state with restaurants', () => {
    const restaurants = [{ restaurant: 1 }, { restaurant: 2 }];
    const expected = [{ restaurant: 1 }, { restaurant: 2 }];
    const action = actions.addRestaurants(restaurants);
    expect(reducer(undefined, action)).toEqual(expected); 
  });
});