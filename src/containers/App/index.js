import React, { Component } from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import Header from '../Header';
import RestaurantsContainer from '../RestaurantsContainer';
import { fetchLocation } from '../../api/apiCalls/fetchLocation';
import { fetchRestaurants } from '../../api/apiCalls/fetchRestaurants';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { addRestaurants } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
  }

  async componentDidMount() {
    try {
      const location = await fetchLocation();
      const restaurants = await fetchRestaurants(location);
      const cleanRestaurants = restaurantsCleaner(restaurants);
      this.props.addRestaurants(cleanRestaurants);
    } catch (error) {
      this.setState({error});
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={ RestaurantsContainer } />
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

export default connect(null, mapDispatchToProps)(App);
