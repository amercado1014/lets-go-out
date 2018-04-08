import React, { Component } from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import Main from '../Main';
import RestaurantsContainer from '../RestaurantsContainer';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ Main } />
        <Route path='/restaurants' component={ RestaurantsContainer } />
      </div>
    );
  }
}

export default App;
