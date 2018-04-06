import React, { Component } from 'react';
import './styles.css';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <div>
        <h1>{ "Let's Order Out" }</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.searchValue}
            placeholder="Enter city or zip code"
            onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Main;
