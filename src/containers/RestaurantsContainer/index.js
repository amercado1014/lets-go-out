import React from 'react';
import './styles.css';
import Restaurants from '../Restaurants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const RestaurantsContainer = ({restaurants, locationStatus, 
  favorites}) => {
  const displayRestaurants = restaurants.map(restaurant => {
    let isFavorite = false;

    favorites.forEach(favorite => {
      if (favorite.apiKey === restaurant.apiKey) {
        isFavorite = true;
      }
    });

    return <Restaurants 
      key={restaurant.name} 
      restaurant={restaurant} 
      isFavorite={isFavorite} />;
  });
 
  return (
    <div className="restaurant-container">
      {locationStatus &&
      <div className="location-message">
        <h3>Seems like your browsers GeoLocation is disabled. 
        Please enter a city or zip code to search for restaurants.</h3>
      </div>
      }
      {displayRestaurants}
    </div>
  );
};

export const mapStateToProps = state => ({
  restaurants: state.restaurants,
  locationStatus: state.locationStatus,
  favorites: state.favorites
});

RestaurantsContainer.propTypes = {
  restaurants: PropTypes.array,
  locationStatus: PropTypes.bool,
  favorites: PropTypes.array
};

export default connect(mapStateToProps)(RestaurantsContainer);
