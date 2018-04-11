import React, { Component } from 'react';
import './styles.css';
import { fetchMenu } from '../../api/apiCalls/fetchMenu';
import { addMenu } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

export class Restaurants extends Component {

  handleClick = async menuKey => {
    try {
      const menu = await fetchMenu(menuKey);
      this.props.addMenu(menu);
    } catch (error) {
      throw error;
    }
  }

  render() {
    const { name, logoUrl, city, foodTypes, 
      phone, state, streetAddress, hours, zip, apiKey } = this.props.restaurant;
    const hoursInfo = Object.keys(hours).map((day, index) => {
      return <p key={index}>{day}: {hours[day]}</p>;
    });
    return (
      <div onClick={() => this.handleClick(apiKey)}>
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

export const mapDispatchToProps = dispatch => ({
  addMenu: menu => dispatch(addMenu(menu))
});

Restaurants.propTypes = {
  restaurant: PropTypes.object,
  addMenu: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Restaurants);