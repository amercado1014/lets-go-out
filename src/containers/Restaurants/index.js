import React, { Component } from 'react';
import './styles.css';
import PropTypes from "prop-types";

export class Restaurants extends Component {

  handleClick = () => {
    console.log('works');
  }

  render() {
    const { name, logoUrl, city, foodTypes, 
      phone, state, streetAddress, hours, zip } = this.props.restaurant;
    const hoursInfo = Object.keys(hours).map((day, index) => {
      return <p key={index}>{day}: {hours[day]}</p>;
    });
    return (
      <div onClick={this.handleClick}>
        <h2>{name}</h2>
        <img src={logoUrl} alt="restaurant logo"/>
        <p>{streetAddress}</p>
        <p>{`${city} ${state} ${zip}`}</p>
        <p>{phone}</p>
        <p>{`Food types: ${foodTypes}`}</p>
        {hoursInfo}
      </div>
    );
  }
}

Restaurants.propTypes = {
  restaurant: PropTypes.object
};

export default Restaurants;