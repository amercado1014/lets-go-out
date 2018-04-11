const restaurantReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_RESTAURANT':
    return action.restaurant;
  default:
    return state;
  }
};

export default restaurantReducer;
