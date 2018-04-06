import React, { Component } from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import { Main } from '../Main';
import { Restaurants } from '../Restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ Main } />
        <Route path='/restaurants' component={ Restaurants } />
      </div>
    );
  }
}

export default App;
