import React, { Component } from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import { Main } from '../Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ Main } />
      </div>
    );
  }
}

export default App;
