import React, { Component } from 'react';
import './styles.css';
import { fetchMenu } from '../../api/apiCalls/fetchMenu';
import { addMenu } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

export class Restaurants extends Component {

  handleClick = async menuKey => {
    try {
      const menu = await fetchMenu(menuKey);
      this.props.addMenu(menu);
      this.props.history.push('/menu');
    } catch (error) {
      throw error;
    }
  }

  render() {
    const { name, logoUrl, foodTypes, apiKey, deliveryMin, 
      offersDelivery, deliveryPrice } = this.props.restaurant;

    return (
      <div onClick={() => this.handleClick(apiKey)}>
        <h2>{name}</h2>
        <img src={logoUrl} alt="restaurant logo"/>
        <p>{foodTypes}</p>
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
  addMenu: menu => dispatch(addMenu(menu))
});

Restaurants.propTypes = {
  restaurant: PropTypes.object,
  addMenu: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(connect(null, mapDispatchToProps)(Restaurants));