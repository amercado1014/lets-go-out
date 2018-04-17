import React from 'react';
import './styles.css';
import { Link, withRouter } from 'react-router-dom';

export const SignUpLink = () => (
  <p>
    {`Don't have an account?`}{" "}
    <Link className="signup-link" to='/signup'>
      Sign Up
    </Link>
  </p>
);

export default withRouter(SignUpLink);

