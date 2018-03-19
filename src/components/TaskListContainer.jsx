import React, { Component } from 'react';
import axios from 'axios';
import Keys from '../Keys';
import TaskList from './TaskList';

export default class TaskListContainer extends Component {
  state = {};

  componentDidMount() {
    const AuthStr = `Bearer ${Keys.ASANA_BEARER_TOKEN}`;
    axios
      .get('https://app.asana.com/api/1.0/projects/597581411344319/tasks?opt_fields=notes,name', {
        headers: { Authorization: AuthStr }
      })
      .then(response => {
        this.setState({tasks: response.data.data});
      });
  }

  render() {
    return (
      <TaskList tasks={this.state.tasks}/>
    );
  }
}
