import React, { Component } from 'react';
import './styles.css';
import { fetchMenu } from '../../api/apiCalls/fetchMenu';
import { addMenu, addRestaurant, 
  addFavorite, removeFavorite } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import favIcon from '../../images/favorite.svg';
import PropTypes from "prop-types";

export class Restaurants extends Component {

  handleClick = async () => {
    const { restaurant, addMenu, addRestaurant, history } = this.props;
    try {
      const menu = await fetchMenu(restaurant.apiKey);
      addMenu(menu);
      addRestaurant(restaurant);
      history.push('/menu');
    } catch (error) {
      throw error;
    }
  }

  addFavorite = () => {
    const { restaurant, addFavorite, isFavorite } = this.props;

    if (!isFavorite) {
      addFavorite(restaurant);
    }
  }

  removeFavorite = () => {
    const { restaurant, removeFavorite, isFavorite } = this.props;

    if (isFavorite) {
      removeFavorite(restaurant.apiKey);
    }
  }

  handleFavorite = () => {
    this.addFavorite();
    this.removeFavorite();
  }

  render() {
    const { name, logoUrl, deliveryMin, 
      offersDelivery, deliveryPrice } = this.props.restaurant;
    const { authUser, isFavorite } = this.props;
    const favorite = isFavorite ? 'favorite-background' : '';

    return (
      <div >
        <div className="restaurant">
          <img src={logoUrl} 
            alt="restaurant logo"
            className="restaurant-image"
            onClick={this.handleClick}/>
          <div className="restaurant-info"
            onClick={this.handleClick}>
            <h2>{name}</h2>
            <div className="minimum">
              <p>Minimum</p>
              <p>{deliveryMin || 'None'}</p>
            </div>
            {offersDelivery 
              ? <div className="delivery">
                <p>Delivery</p> 
                <p>{deliveryPrice || 'Free'}</p>
              </div>
              : <div className="delivery">
                <p>Delivery</p> 
                <p>Takeout Only</p>
              </div>
            }
          </div>
          {authUser && 
          <div 
            onClick={this.handleFavorite}
            className={`favorite-div ${favorite}`}>
            <img
              src={favIcon}
              alt="favorite icon"
              className="favorite-icon" />
          </div>
          }
        </div>
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
  addFavorite: restaurant => dispatch(addFavorite(restaurant)),
  removeFavorite: apiKey => dispatch(removeFavorite(apiKey)) 
});

Restaurants.propTypes = {
  restaurant: PropTypes.object,
  addMenu: PropTypes.func,
  history: PropTypes.object,
  addRestaurant: PropTypes.func,
  authUser: PropTypes.object,
  addFavorite: PropTypes.func,
  isFavorite: PropTypes.bool,
  removeFavorite: PropTypes.func
};

export default 
withRouter(connect(mapStateToProps, mapDispatchToProps)(Restaurants));