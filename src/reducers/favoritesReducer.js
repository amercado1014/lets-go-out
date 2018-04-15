const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.favorite];
  case 'REMOVE_FAVORITE':
    return state.filter(restaurant => restaurant.apiKey !== action.apiKey);
  default:
    return state;
  }
};

export default favoritesReducer;
