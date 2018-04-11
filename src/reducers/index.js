import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';
import menu from './menuReducer';

const rootReducer = combineReducers({
  restaurants,
  menu
});

export default rootReducer;