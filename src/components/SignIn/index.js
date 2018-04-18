import React, { Component } from 'react';
import './styles.css';
import { SignUpLink } from '../SignUpLink';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../firebase';
import PropTypes from "prop-types";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    try {
      await auth.signIn(email, password);
      history.push('/');
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  closeSignIn = event => {
    const { history } = this.props;
    event.preventDefault();
    history.push('/');
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form 
        onSubmit={this.handleSubmit}
        className="signin-form">
        <div className="close-div">
          <Link className="close-btn" to='/'>X</Link>
        </div>
        <h1>Sign In</h1>
        <div className="signin-div">
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Email Address"
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit" 
            disabled={isInvalid}
            className="signin-button">
          Sign In
          </button>
          <div className="error-div">
            {error && <p>{error}</p>}
          </div>
          <SignUpLink />
        </div>
      </form>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
