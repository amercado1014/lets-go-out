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
import { addRestaurants } from '../../actions';
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
  }

  render() {
    return (
      <div className="App">
        <Header authUser={this.state.authUser} />
        <Route exact path='/' component={ RestaurantsContainer } />
        <Route exact path='/menu' component={ Menu } />
        <Route exact path='/signin' component={ SignIn } />
        <Route exact path='/signup' component={ SignUp} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addRestaurants: restaurants => dispatch(addRestaurants(restaurants))
});

App.propTypes = {
  addRestaurants: PropTypes.func
}; 

export default withRouter(connect(null, mapDispatchToProps)(App));
