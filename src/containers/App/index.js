import React, { Component } from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import Header from '../Header';
import RestaurantsContainer from '../RestaurantsContainer';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={ RestaurantsContainer } />
      </div>
    );
  }
}

export default App;
