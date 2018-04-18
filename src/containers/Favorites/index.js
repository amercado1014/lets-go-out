import React from 'react';
import './styles.css';
import Restaurants from '../Restaurants';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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
          ? <div>
            <Link className="fav-back-btn" to='/'>◀ Back</Link>
            {displayFavorites}
          </div> 
          : <div className="favorites-message">
            <div className="back-div">
              <Link className="back-btn" to='/'>◀ Back</Link>
            </div>
            <h4>
              There are no favorites to display.
            </h4>
          </div>
        }
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

export default withRouter(connect(mapStateToProps)(Favorites));