import { apiKey } from './apiKey';

export const fetchRestaurantsByLocation = async location => {
  const root = 'https://api.eatstreet.com/publicapi/v1';
  // eslint-disable-next-line 
  const url = `${root}/restaurant/search?latitude=${location.lat}&longitude=${location.lng}&method=both`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Access-Token": apiKey }
    });
    const restaurants = await response.json();
    return restaurants.restaurants;
  } catch (error) {
    throw new Error(`Error fetching restaurants: ${error.details}`);
  }
};
