import React, { Component } from 'react';
import './styles.css';
import { fetchRestaurantsBySearch 
} from '../../api/apiCalls/fetchRestaurantsBySearch';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { addRestaurants, locationOff } from '../../actions/';
import { connect } from 'react-redux';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import locationLogo from '../../images/location.png';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  }

  handleSubmit = async event => {
    const { searchValue } = this.state;
    event.preventDefault();
    try {
      const restaurants = await fetchRestaurantsBySearch(searchValue);
      const cleanRestaurants = restaurantsCleaner(restaurants);
      this.props.addRestaurants(cleanRestaurants);
    } catch (error) {
      throw error.message;
    }
    this.props.locationOff(false);
    this.setState({ searchValue: ''});
  }

  render() {
    const { authUser, restaurants } = this.props;
    return (
      <div className="header">
        <img className="logo" src={logo} alt="logo"/>
        {restaurants.length > 0 &&
          <p className="location">
            <img className="location-logo" src={locationLogo} alt="logo"/> 
            {restaurants[0].city}, {restaurants[0].state}
          </p>
        }
        <form onSubmit={this.handleSubmit}>
          <input 
            className="header-input"
            type="text"
            value={this.state.searchValue}
            placeholder="Enter city or zip code"
            onChange={this.handleChange}/>
        </form>
        <div className="navigation">
          {authUser 
            ? <div>
              <SignOut />
              <Link className="signin-link" to='/favorites'>Favorites</Link>
            </div>
            : <Link className="signin-link"
              to={routes.SIGN_IN}>Sign In
            </Link>
          }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  authUser: state.authUser,
  restaurants: state.restaurants
});

export const mapDispatchToProps = dispatch => ({
  addRestaurants: restaurants => dispatch(addRestaurants(restaurants)),
  locationOff: boolean => dispatch(locationOff(boolean))
});

Header.propTypes = {
  addRestaurants: PropTypes.func,
  authUser: PropTypes.object,
  locationOff: PropTypes.func,
  restaurants: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
