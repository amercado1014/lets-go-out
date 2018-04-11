import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Menu = ({menu}) => {
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
      {displayMenuSection}
    </div>
  );
};

export const mapStateToProps = state => ({
  menu: state.menu
});

Menu.propTypes = {
  menu: PropTypes.array
};

export default connect(mapStateToProps)(Menu);