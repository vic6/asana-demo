import React, { Component } from 'react';
import Task from './Task';

// name notes id
export default class TaskContainer extends Component {
  render() {
    const { name, note, id } = this.props;
    return <Task key={id} name={name} note={note} />;
  }
}
