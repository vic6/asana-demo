import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';
import TaskContainer from './TaskContainer';

export default class TaskList extends Component {
  render() {
    // const data = JSON.stringify(this.props.tasks, null, 4);
    let list = this.props.tasks;
    if (list) {
      list = list.map(task => (
        // <List.item>
        <TaskContainer name={task.name} note={task.notes} key={task.id} />
        // </List.item>
      ));
    }

    return (
      <Container>
        <List selection verticalAlign='middle' as="ol" celled>
          {list}
        </List>
      </Container>
    );
  }
}
