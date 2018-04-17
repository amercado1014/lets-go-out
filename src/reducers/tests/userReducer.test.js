import reducer from '../userReducer';
import * as actions from '../../actions';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should add user', () => {
    const user = { id: 1 };
    const expected = { id: 1 };
    const state = null;
    const action = actions.addUser(user);
    expect(reducer(state, action)).toEqual(expected); 
  });
});