import React from 'react';
import './styles.css';
import Restaurants from '../Restaurants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const RestaurantsContainer = ({restaurants, locationStatus}) => {
  const displayRestaurants = restaurants.map(restaurant => {
    return <Restaurants key={restaurant.name} restaurant={restaurant} />;
  });
  
  return (
    <div>
      {locationStatus &&
      <h3>Seems like your browsers GeoLocation is disabled. 
        Please enter a city or zip code to search for restaurants.</h3>
      }
      {displayRestaurants}
    </div>
  );
};

export const mapStateToProps = state => ({
  restaurants: state.restaurants,
  locationStatus: state.locationStatus
});

RestaurantsContainer.propTypes = {
  restaurants: PropTypes.array,
  locationStatus: PropTypes.bool
};

export default connect(mapStateToProps)(RestaurantsContainer);
