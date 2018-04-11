import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';
import menu from './menuReducer';
import restaurant from './restaurantReducer';

const rootReducer = combineReducers({
  restaurants,
  menu,
  restaurant
});

export default rootReducer;