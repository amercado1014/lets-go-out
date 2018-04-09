import React from 'react';
import './styles.css';
import PropTypes from "prop-types";

export const Restaurants = ({restaurant}) => {
  const { name, logoUrl, city, foodTypes, 
    phone, state, streetAddress, hours, zip } = restaurant;
  const hoursInfo = Object.keys(hours).map((day, index) => {
    return <p key={index}>{day}: {hours[day]}</p>;
  });
  return (
    <div>
      <h2>{name}</h2>
      <img src={logoUrl} alt="restaurant logo"/>
      <p>{streetAddress}</p>
      <p>{`${city} ${state} ${zip}`}</p>
      <p>{phone}</p>
      <p>{`Food types: ${foodTypes}`}</p>
      {hoursInfo}
    </div>
  );
};

Restaurants.propTypes = {
  restaurant: PropTypes.object
};

export default Restaurants;