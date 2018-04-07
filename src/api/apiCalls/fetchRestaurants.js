export const fetchRestaurants = async search => {
  const root = 'https://api.eatstreet.com/publicapi/v1'; 
  const url = `${root}/restaurant/search?method=both&street-address=${search}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Access-Token": "9ad1eeeff9cdfed8" }
    });
    const restaurants = await response.json();
    console.log(restaurants);
  } catch (error) {
    throw error.message;
  }
};
