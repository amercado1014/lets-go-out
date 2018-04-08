const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_RESTAURANTS':
    return [...state, ...action.restaurants];
  default:
    return state;
  }
};

export default restaurantsReducer;