import React, { Component } from 'react';
import './App.scss';
import Todo from '../../features/todo/components/Todo/Todo';
import { FortuneTellerWithQuery } from '../FortuneTeller/FortuneTeller';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <FortuneTellerWithQuery />
      </div>
    );
  }
}

export default App;
