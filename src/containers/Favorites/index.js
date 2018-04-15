import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Favorites = ({favorites}) => {
  console.log(favorites)
  return (
    <div>
      <h4>There are no favorites to display.</h4>
    </div>
  );
};

export const mapStateToProps = state => ({
  favorites: state.favorites
});

Favorites.propTypes = {
  favorites: PropTypes.array
};

export default connect(mapStateToProps)(Favorites);