import React, { Component } from 'react';
import './App.css';
import { ScaleComponent } from './core/music/scale';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            string-theory
          </p>
          <ScaleComponent />
        </header>
      </div>
    );
  }
}

export default App;
