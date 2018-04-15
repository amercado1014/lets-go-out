import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';
import menu from './menuReducer';
import restaurant from './restaurantReducer';
import locationStatus from './locationReducer';
import authUser from './userReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  restaurants,
  menu,
  restaurant,
  locationStatus,
  authUser,
  favorites
});

export default rootReducer;