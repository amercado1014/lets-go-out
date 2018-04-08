import React from 'react';
import './styles.css';
import Restaurant from '../Restaurants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const RestaurantContainer = ({restaurants}) => {
  console.log(restaurants);
  return (
    <div>
      <h1>{ "Let's Order Out" }</h1>
      <Restaurant />
    </div>
  );
};

export const mapStateToProps = state => ({
  restaurants: state.restaurants
});

RestaurantContainer.propTypes = {
  restaurants: PropTypes.array
};

export default connect(mapStateToProps)(RestaurantContainer);
