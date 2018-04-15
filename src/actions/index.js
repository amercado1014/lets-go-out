export const addRestaurants = restaurants => ({
  type: 'ADD_RESTAURANTS',
  restaurants
});

export const addMenu = menu => ({
  type: 'ADD_MENU',
  menu
});

export const addRestaurant = restaurant => ({
  type: "ADD_RESTAURANT",
  restaurant
});

export const locationOff = boolean => ({
  type: 'LOCATION_OFF',
  boolean
});

export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const addFavorite = favorite => ({
  type: 'ADD_FAVORITE',
  favorite
});

export const removeFavorite = apiKey => ({
  type: 'REMOVE_FAVORITE',
  apiKey
});

export const resetFavorites = () => ({
  type: 'RESET_FAVORITES'
});