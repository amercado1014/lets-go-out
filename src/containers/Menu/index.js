import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Menu = ({menu, restaurant}) => {
  const { logoUrl, name, streetAddress, 
    city, state, zip, foodTypes, phone } = restaurant;
  const displayMenuSection = menu.map(section => {
    const menuItem = section.items.map(item => {
      return (
        <div className="item" key={item.apiKey}>
          <div className="item-info">
            <p className="item-name">{item.name}</p>
            <p className="item-price">${item.basePrice}</p>
          </div>
          <div className="description">
            {item.description &&
          <p>{item.description}</p>
            }
          </div>
        </div>
      );
    });
    return (
      <div key={section.apiKey}>
        <h3 className="section-name">{section.name}</h3>
        <div className="menu-items">
          {menuItem}
        </div>
      </div>
    );
  });

  return (
    <div className="menu">
      <Link className="fav-back-btn" to='/'>◀ Back</Link>
      <div className="menu-header">
        <img className="restaurant-logo" src={logoUrl} alt="restaurant logo"/>
        <div className="menu-restaurant">
          <h1>{name}</h1>
          <h3>{foodTypes}</h3>
          <p>{streetAddress} {city}, {state} {zip}</p>
          <p>{phone}</p>
        </div>
      </div>
      {displayMenuSection}
    </div>
  );
};

export const mapStateToProps = state => ({
  menu: state.menu,
  restaurant: state.restaurant
});

Menu.propTypes = {
  menu: PropTypes.array,
  restaurant: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(Menu));