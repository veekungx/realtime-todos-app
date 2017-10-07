import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Todo from './features/todo/components/Todo/Todo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
