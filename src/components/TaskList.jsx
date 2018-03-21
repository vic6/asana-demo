import React from 'react';
import { Container, List } from 'semantic-ui-react';
import TaskContainer from './TaskContainer';

const TaskList = ({ tasks, markAsDone }) => {
  let list = tasks;

  if (list) {
    list = list.map(task => (
      <TaskContainer
        name={task.name}
        note={task.notes}
        id={task.id}
        key={task.id}
        markAsDone={markAsDone}
      />
    ));
  }
  return (
    <Container>
      <List selection verticalAlign="middle" as="ol" celled>
        {list}
      </List>
    </Container>
  );
};

export default TaskList;
