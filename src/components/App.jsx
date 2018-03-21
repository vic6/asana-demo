import React from 'react';
import TaskListContainer from './TaskListContainer';
import Header from './Header';

const App = ({ match }) => (
  <div>
    <Header project={match.params.id} />
    <TaskListContainer project={match.params.id} />
  </div>
);

export default App;
