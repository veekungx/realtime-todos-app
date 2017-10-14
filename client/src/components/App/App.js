import React from 'react';
import './App.scss';
import FortuneTellerWithQuery from '../../containers/FortuneTellerWithQuery/FortuneTellerWithQuery';
import TodoWithData from '../../features/todo/containers/TodoWithData/TodoWithData';

const App = () =>
  (
    <div className="App">
      <TodoWithData />
      <FortuneTellerWithQuery />
    </div>
  );

export default App;
