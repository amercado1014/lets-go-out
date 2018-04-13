import React from 'react';
import './styles.css';
import { auth } from '../../firebase';

const SignOut = () => (
  <button type='button' onClick={auth.signOut}>
    Sign Out
  </button>
);

export default SignOut;
