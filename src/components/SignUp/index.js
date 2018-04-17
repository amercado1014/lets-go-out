import React, { Component } from 'react';
import './styles.css';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, passwordOne } = this.state;
    const { history } = this.props;
    try {
      await auth.signUp(email, passwordOne);
      history.push('/');
    } catch (error) {
      this.setState({error: error.message});
    }
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo || 
    passwordOne === "" || email === "" || username === "";

    return (
      <form 
        onSubmit={this.handleSubmit}
        className="signup-form">
        <div className="signup-div">
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Username"
            onChange={this.handleChange} />
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Email Address"
            onChange={this.handleChange} />
          <input
            type="password"
            value={passwordOne}
            name="passwordOne"
            placeholder="Password"
            onChange={this.handleChange} />
          <input
            type="password"
            value={passwordTwo}
            name="passwordTwo"
            placeholder="Confirm Password"
            onChange={this.handleChange} />
          <button 
            type="submit"
            disabled={isInvalid}>
          Sign Up
          </button>
          { error && <p>{error}</p> }
        </div>
      </form>
    );
  }
}

export default withRouter(SignUp);

