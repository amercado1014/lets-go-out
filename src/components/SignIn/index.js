import React, { Component } from 'react';
import './styles.css';
import { SignUpLink } from '../../containers/SignUp';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

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
      history.push(routes.HOME);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form 
        onSubmit={this.handleSubmit}
        className="signin-form">
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
          {error && <p>{error}</p>}
          <SignUpLink />
        </div>
      </form>
    );
  }
}

export default withRouter(SignIn);
