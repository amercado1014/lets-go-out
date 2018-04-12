import reducer from '../menuReducer';
import * as actions from '../../actions';

describe('menu reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return state with a menu', () => {
    const menu = [1, 2, 3];
    const expected = [1, 2, 3];
    const action = actions.addMenu(menu);
    expect(reducer(undefined, action)).toEqual(expected);
  });
});