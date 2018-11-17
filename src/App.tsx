import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scale } from './music/scale';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            string-theory
          </p>
          <Scale />
        </header>
      </div>
    );
  }
}

export default App;
