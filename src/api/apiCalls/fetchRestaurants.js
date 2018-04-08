export const fetchRestaurants = async search => {
  const root = 'https://api.eatstreet.com/publicapi/v1'; 
  const url = `${root}/restaurant/search?method=both&street-address=${search}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Access-Token": "9ad1eeeff9cdfed8" }
    });
    const restaurants = await response.json();
    return restaurants.restaurants;
  } catch (error) {
    throw new Error('Error fetching restaurants: ', error);
  }
};
