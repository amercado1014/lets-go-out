export const restaurantsCleaner = (restaurantsArray) => {
  return restaurantsArray.map(restaurant => {
    const { apiKey, logoUrl, name, streetAddress, city, state, zip, foodTypes, 
      phone, url, deliveryMin, minFreeDelivery,
      offersDelivery, deliveryPrice } = restaurant;
    const hours = Object.keys(restaurant.hours).reduce((hoursObject, day) => {
      if (!hoursObject[day]) {
        hoursObject[day] = restaurant.hours[day].join(',\n');
      }
      return hoursObject;
    }, {});
    
    return ({
      apiKey,
      logoUrl,
      name,
      streetAddress,
      city,
      state,
      zip,
      foodTypes: foodTypes.join(',\n'),
      phone,
      url,
      hours,
      deliveryMin,
      offersDelivery,
      minFreeDelivery,
      deliveryPrice
    });
  });
};
