import React from 'react';
import './styles.css';
import Restaurant from '../Restaurants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const RestaurantContainer = () => {
  return (
    <div>
      <h1>{ "Let's Order Out" }</h1>
      <Restaurant />
    </div>
  );
};

export default RestaurantContainer;
