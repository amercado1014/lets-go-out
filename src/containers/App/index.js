import React, { Component } from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import Header from '../Header';
import RestaurantsContainer from '../RestaurantsContainer';
import { fetchLocation } from '../../api/apiCalls/fetchLocation';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
  }

  async componentDidMount() {
    try {
      const location = await fetchLocation();
      console.log(location)
    } catch (error) {
      this.setState({error});
    }
  }

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
