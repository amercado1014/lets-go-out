import React from 'react';
import './styles.css';
import Restaurant from '../Restaurants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const RestaurantsContainer = ({restaurants}) => {
  const displayRestaurants = restaurants.map(restaurant => {
    return <Restaurant key={restaurant.name} restaurant={restaurant} />;
  });
  
  return (
    <div>
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
