import React from 'react';
import './styles.css';
import Restaurants from '../Restaurants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Favorites = ({favorites}) => {
  const displayFavorites = favorites.map(favorite => {
    return <Restaurants key={favorite.apiKey} 
      restaurant={favorite}
      isFavorite={true} />;
  });

  return (
    <div>
      <div className="favorites">
        {displayFavorites.length > 0 
          ? displayFavorites 
          : <h4>There are no favorites to display.</h4>}
      </div>
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