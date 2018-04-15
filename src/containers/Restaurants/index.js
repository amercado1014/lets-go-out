import React, { Component } from 'react';
import './styles.css';
import { fetchMenu } from '../../api/apiCalls/fetchMenu';
import { addMenu, addRestaurant, addFavorite } from '../../actions';
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

  addFavorite = () => {
    const { restaurant, addFavorite } = this.props;
    addFavorite(restaurant);
  }

  handleFavorite = () => {
    this.addFavorite();
  }

  render() {
    const { name, logoUrl, apiKey, deliveryMin, 
      offersDelivery, deliveryPrice } = this.props.restaurant;
    const { authUser, restaurant } = this.props;

    return (
      <div>
        <div onClick={() => this.handleClick(apiKey, restaurant)}>
          <h2>{name}</h2>
          <img src={logoUrl} alt="restaurant logo"/>
          <p>Minimum: {deliveryMin || 'None'}</p>
          {offersDelivery 
            ? <p>Delivery: {deliveryPrice || 'Free'}</p>
            : <p>Delivery: Takeout Only</p>
          }
        </div>
        {authUser && 
          <button onClick={this.handleFavorite}>
            Favorite
          </button>
        }
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  authUser: state.authUser
});

export const mapDispatchToProps = dispatch => ({
  addMenu: menu => dispatch(addMenu(menu)),
  addRestaurant: restaurant => dispatch(addRestaurant(restaurant)),
  addFavorite: restaurant => dispatch(addFavorite(restaurant)) 
});

Restaurants.propTypes = {
  restaurant: PropTypes.object,
  addMenu: PropTypes.func,
  history: PropTypes.object,
  addRestaurant: PropTypes.func,
  authUser: PropTypes.object,
  addFavorite: PropTypes.func
};

export default 
withRouter(connect(mapStateToProps, mapDispatchToProps)(Restaurants));