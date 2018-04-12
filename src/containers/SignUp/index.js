import React, { Component } from 'react';
import './styles.css';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

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

   handleSubmit = event => {
     event.preventDefault();
     const {
       username,
       email,
       passwordOne
     } = this.state;

     auth.signUp(email, passwordOne)
       .then(authUser => {
         this.setState({
           username: '',
           email: '',
           passwordOne: '',
           passwordTwo: '',
           error: null
         });
       })
       .then(authUser => this.props.history.push('/'))
       .catch(error => {
         this.setState({error: error});
       });
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
       <form onSubmit={this.handleSubmit}>
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
         { error && <p>{error.message}</p> }
       </form>
     );
   }
}

export default withRouter(SignUp);
