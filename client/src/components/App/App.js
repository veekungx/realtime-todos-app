import React, { Component } from 'react';
import './App.scss';
import { FortuneTellerWithQuery } from '../FortuneTeller/FortuneTeller';
import TodoWithData from '../../features/todo/containers/TodoWithData/TodoWithData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoWithData />
        <FortuneTellerWithQuery />
      </div>
    );
  }
}

export default App;
