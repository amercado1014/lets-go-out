const locationReducer = (state = false, action) => {
  switch (action.type) {
  case 'LOCATION_OFF':
    return action.boolean;
  default:
    return state;
  }
};

export default locationReducer;
