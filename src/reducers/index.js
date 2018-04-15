import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';
import menu from './menuReducer';
import restaurant from './restaurantReducer';
import locationStatus from './locationReducer';
import authUser from './userReducer';

const rootReducer = combineReducers({
  restaurants,
  menu,
  restaurant,
  locationStatus,
  authUser
});

export default rootReducer;