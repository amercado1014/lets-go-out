import reducer from '../restaurantReducer';
import * as actions from '../../actions';

describe('restaurant reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should add restaurant', () => {
    const restaurant = {name: 'Dominos'};
    const expected = { name: "Dominos" };
    const action = actions.addRestaurant(restaurant);
    expect(reducer(undefined, action)).toEqual(expected);
  });
});