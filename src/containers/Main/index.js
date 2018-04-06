import React, { Component } from 'react';
import './styles.css';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  render() {
    return (
      <div>
        <h1>{ "Let's Order Out" }</h1>
        <form>
          <input type="text"/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Main;
