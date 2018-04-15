import React, { Component } from 'react';
import './styles.css';
import { fetchRestaurantsBySearch 
} from '../../api/apiCalls/fetchRestaurantsBySearch';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { addRestaurants, locationOff } from '../../actions/';
import { connect } from 'react-redux';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';
import SignOut from '../../components/SignOut';
import PropTypes from 'prop-types';

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
  }

  render() {
    const { authUser } = this.props;
    return (
      <div>
        <h1>{ "Let's Order Out" }</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.searchValue}
            placeholder="Enter city or zip code"
            onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>
        <div className="navigation">
          {authUser 
            ? <div>
              <SignOut />
              <Link to='/favorites'>Favorites</Link>
            </div>
            : <Link to={routes.SIGN_IN}>Sign In</Link>
          }
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addRestaurants: restaurants => dispatch(addRestaurants(restaurants)),
  locationOff: boolean => dispatch(locationOff(boolean))
});

Header.propTypes = {
  addRestaurants: PropTypes.func,
  authUser: PropTypes.object,
  locationOff: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Header);
