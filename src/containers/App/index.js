import React, { Component } from 'react';
import './styles.css';
import { Route, withRouter } from 'react-router-dom';
import Header from '../Header';
import RestaurantsContainer from '../RestaurantsContainer';
import Menu from '../Menu';
import SignIn from '../../components/SignIn';
import SignUp from '../SignUp';
import Favorites from '../Favorites';
import { fetchLocation } from '../../api/apiCalls/fetchLocation';
import { fetchRestaurantsByLocation 
} from '../../api/apiCalls/fetchRestaurantsByLocation';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { addRestaurants, locationOff, addUser } from '../../actions';
import { connect } from 'react-redux';
import { firebase } from '../../firebase';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
  }

  async componentDidMount() {
    const { addRestaurants, addUser } = this.props;
  try {
      const location = await fetchLocation();
      const restaurants = await fetchRestaurantsByLocation(location);
      const cleanRestaurants = restaurantsCleaner(restaurants);
      addRestaurants(cleanRestaurants);
    } catch (error) {
      this.setState({error});
    }  
    
    firebase.auth.onAuthStateChanged(authUser => {
      authUser 
        ? addUser(authUser)
        : addUser(null);
    });
    
    this.updateLocationStatus();
  }
  
  updateLocationStatus = () => {
    const { restaurants, locationOff } = this.props;
    setTimeout(() => {
      if (!restaurants.length) {
        locationOff(true);
      }
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={RestaurantsContainer} />
        <Route path='/menu' component={Menu} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/favorites' component={Favorites} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export const mapDispatchToProps = dispatch => ({
  addRestaurants: restaurants => dispatch(addRestaurants(restaurants)),
  locationOff: boolean => dispatch(locationOff(boolean)),
  addUser: user => dispatch(addUser(user))
});

App.propTypes = {
  addRestaurants: PropTypes.func,
  restaurants: PropTypes.array,
  locationOff: PropTypes.func,
  addUser: PropTypes.func
}; 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
