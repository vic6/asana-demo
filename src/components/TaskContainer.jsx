import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import Task from './Task';

// name notes id
export default class TaskContainer extends Component {
  render() {
    const { name, note, id } = this.props;
    return (
      <List.Item><Task key={id} name={name} note={note} /></List.Item>
    )

  }
}
