import reducer from '../locationReducer';
import * as actions from '../../actions';

describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });

  it('should return location status', () => {
    const boolean = true;
    const expected = true;
    const state = false;
    const action = actions.locationOff(boolean);
    expect(reducer(state, action)).toEqual(expected); 
  });
});