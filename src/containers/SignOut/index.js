import React, { Component} from 'react';
import './styles.css';
import { auth } from '../../firebase';
import { connect } from 'react-redux';
import { resetFavorites } from '../../actions';
import PropTypes from "prop-types";

export class SignOut extends Component {

  handleClick = () => {
    const { resetFavorites } = this.props;
    auth.signOut;
    resetFavorites();
  }

  render () {
    return (
      <button type='button' onClick={this.handleClick}>
        Sign Out
      </button>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  resetFavorites: () => dispatch(resetFavorites())
});

SignOut.propTypes = {
  resetFavorites: PropTypes.func
};

export default connect(null, mapDispatchToProps)(SignOut);
