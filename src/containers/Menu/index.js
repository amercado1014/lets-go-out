import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Menu = ({menu, restaurant}) => {
  const { logoUrl, name, streetAddress, 
    city, state, zip, foodTypes, phone } = restaurant;
  const displayMenuSection = menu.map(section => {
    const menuItem = section.items.map(item => {
      return (
        <div key={item.apiKey}>
          <p>{item.name}</p>
          {item.description &&
          <p>{item.description}</p>
          }
          <p>{item.basePrice}</p>
        </div>
      );
    });
    return (
      <div key={section.apiKey}>
        <h3>{section.name}</h3>
        {menuItem}
      </div>
    );
  });

  return (
    <div>
      <div>
        <img src={logoUrl} alt="restaurant logo"/>
        <h1>{name}</h1>
        <h3>{foodTypes}</h3>
        <p>{streetAddress} {city}, {state} {zip}</p>
        <p>{phone}</p>
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

export default connect(mapStateToProps)(Menu);