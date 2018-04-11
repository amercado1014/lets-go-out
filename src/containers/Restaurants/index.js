import React, { Component } from 'react';
import './styles.css';
import { fetchMenu } from '../../api/apiCalls/fetchMenu';
import { addMenu, addRestaurant } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

export class Restaurants extends Component {

  handleClick = async (menuKey, restaurant) => {
    try {
      const menu = await fetchMenu(menuKey);
      this.props.addMenu(menu);
      this.props.addRestaurant(restaurant);
      this.props.history.push('/menu');
    } catch (error) {
      throw error;
    }
  }

  render() {
    const { name, logoUrl, apiKey, deliveryMin, 
      offersDelivery, deliveryPrice } = this.props.restaurant;

    return (
      <div onClick={() => this.handleClick(apiKey, this.props.restaurant)}>
        <h2>{name}</h2>
        <img src={logoUrl} alt="restaurant logo"/>
        <p>Minimum: {deliveryMin || 'None'}</p>
        {offersDelivery ?
          <p>Delivery: {deliveryPrice || 'Free'}</p>
          :
          <p>Delivery: Takeout Only</p>
        }
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addMenu: menu => dispatch(addMenu(menu)),
  addRestaurant: restaurant => dispatch(addRestaurant(restaurant))
});

Restaurants.propTypes = {
  restaurant: PropTypes.object,
  addMenu: PropTypes.func,
  history: PropTypes.object,
  addRestaurant: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(Restaurants));