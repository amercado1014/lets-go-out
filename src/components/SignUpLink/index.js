import React from 'react';
import './styles.css';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';

export const SignUpLink = () => (
  <p>
    {`Don't have an account?`}{" "}
    <Link className="signup-link" to={routes.SIGN_UP}>
      Sign Up
    </Link>
  </p>
);

export default withRouter(SignUpLink);

