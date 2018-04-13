import React from 'react';
import './styles.css';
import Restaurants from '../Restaurants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const RestaurantsContainer = ({restaurants, locationOff}) => {
  const displayRestaurants = restaurants.map(restaurant => {
    return <Restaurants key={restaurant.name} restaurant={restaurant} />;
  });
  
  return (
    <div>
      {locationOff &&
      <h3>Seems like your browsers GeoLocation is disabled. 
        Please enter a city or zip code to search for restaurants.</h3>
      }
      {displayRestaurants}
    </div>
  );
};

export const mapStateToProps = state => ({
  restaurants: state.restaurants
});

RestaurantsContainer.propTypes = {
  restaurants: PropTypes.array
};

export default connect(mapStateToProps)(RestaurantsContainer);
