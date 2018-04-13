import React, { Component } from "react";
import "./styles.css";
import { SignUpLink } from "../SignUp";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    auth
      .signIn(email, password)
      .then(authUser => {
        this.setState({
          email: "",
          password: "",
          error: null
        });
      })
      .then(authUser => this.props.history.push(routes.HOME))
      .catch(error => {
        this.setState({ error: error });
      });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.handleSubmit}>
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
        <button type="submit" disabled={isInvalid}>
          Sign In
        </button>
        {error && <p>{error.message}</p>}
        <SignUpLink />
      </form>
    );
  }
}

export default withRouter(SignIn);
