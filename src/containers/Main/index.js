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
        Hello
      </div>
    );
  }
}

export default Main;
