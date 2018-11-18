import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ScaleComponent } from './core/music/scale';
import { AppStore } from './redux/reducers';

class App extends Component {
  render() {
    return (
      <Provider store={AppStore}>
        <div className="App">
          <header className="App-header">
            <p>
              string-theory
            </p>
            <ScaleComponent />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
