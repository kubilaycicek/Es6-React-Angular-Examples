import './App.css';

import React, { Component } from 'react';

import Counter from './Counter.js';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Counter></Counter>
    </div>
    )
  }
}
