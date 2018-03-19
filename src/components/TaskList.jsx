import React, { Component } from 'react';
import TaskContainer from './TaskContainer';

export default class TaskList extends Component {
  render() {
    // const data = JSON.stringify(this.props.tasks, null, 4);
    let list = this.props.tasks;
    if (list) {
      console.log(list[0]);
      list = list.map(task => <TaskContainer name={task.name} note={task.notes} key={task.id} />);
    }

    return <ul>{list}</ul>;
  }
}
