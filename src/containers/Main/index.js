import React, { Component } from 'react';
import './styles.css';
import { fetchRestaurants } from '../../api/apiCalls/fetchRestaurants';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';
import { withRouter } from 'react-router-dom';
import { addRestaurants } from '../../actions/';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Main extends Component {
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
      const restaurants = await fetchRestaurants(searchValue);
      const cleanRestaurants = restaurantsCleaner(restaurants);
      this.props.addRestaurants(cleanRestaurants);
      this.props.history.push('/');
    } catch (error) {
      throw error.message;
    }
  }

  render() {
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
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addRestaurants: restaurants => dispatch(addRestaurants(restaurants))
});

Main.propTypes = {
  history: PropTypes.object
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
