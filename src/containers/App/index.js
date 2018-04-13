import React, { Component } from 'react';
import './styles.css';
import { Route, withRouter } from 'react-router-dom';
import Header from '../Header';
import RestaurantsContainer from '../RestaurantsContainer';
import Menu from '../Menu';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { fetchLocation } from '../../api/apiCalls/fetchLocation';
import { fetchRestaurantsByLocation 
} from '../../api/apiCalls/fetchRestaurantsByLocation';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { addRestaurants, locationOff } from '../../actions';
import { connect } from 'react-redux';
import { firebase } from '../../firebase';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      authUser: null
    };
  }

  async componentDidMount() {
    const { addRestaurants } = this.props;
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
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
    
    this.updateLocationMessage();
  }
  
  updateLocationMessage = () => {
    const { restaurants, locationOff } = this.props;
    setTimeout(() => {
      if (!restaurants.length) {
        locationOff(true);
      }
    }, 5000);
  }

  render() {
    const { authUser } = this.state;
    return (
      <div className="App">
        <Header authUser={authUser} />
        <Route exact path='/' render={ () => 
          <RestaurantsContainer /> } />
        <Route exact path='/menu' component={ Menu } />
        <Route exact path='/signin' component={ SignIn } />
        <Route exact path='/signup' component={ SignUp} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export const mapDispatchToProps = dispatch => ({
  addRestaurants: restaurants => dispatch(addRestaurants(restaurants)),
  locationOff: boolean => dispatch(locationOff(boolean))
});

App.propTypes = {
  addRestaurants: PropTypes.func,
  restaurants: PropTypes.array,
  locationOff: PropTypes.func
}; 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
