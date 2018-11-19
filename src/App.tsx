import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { AppStore } from './redux/reducers';
import MainComponent from './interface/main';

class App extends Component {
  render() {
    return (
      <Provider store={AppStore}>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
