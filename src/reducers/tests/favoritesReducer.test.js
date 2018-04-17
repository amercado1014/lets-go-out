import reducer from '../favoritesReducer';
import * as actions from '../../actions';

describe('favorite reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return state with a favorite restaurant', () => {
    const favorite = {apiKey: 1};
    const state = [{apiKey: 2}];
    const expected = [{apiKey:2}, {apiKey:1}];
    const action = actions.addFavorite(favorite);
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should remove a favorite', () => {
    const state = [{apiKey: 2}, {apiKey: 1}];
    const expected = [{apiKey: 2}];
    const apiKey = 1;
    const action = actions.removeFavorite(apiKey);
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should return an empty array to reset favorites', () => {
    const state = [{ apiKey: 2 }, { apiKey: 1 }];
    const expected = [];
    const action = actions.resetFavorites();
    expect(reducer(state, action)).toEqual(expected);
  });
});