const menuReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_MENU':
    return [...action.menu];
  default:
    return state;
  }
};

export default menuReducer;
