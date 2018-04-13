import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';
import menu from './menuReducer';
import restaurant from './restaurantReducer';
import locationStatus from './locationReducer';

const rootReducer = combineReducers({
  restaurants,
  menu,
  restaurant,
  locationStatus
});

export default rootReducer;