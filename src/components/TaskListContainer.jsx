import React, { Component } from 'react';
import axios from 'axios';
import Keys from '../Keys';
import TaskList from './TaskList';

const NotFound = () => <h1 to="/">Project not found(Try 597581411344319)</h1>;

export default class TaskListContainer extends Component {
  state = {};

  componentDidMount() {
    const AuthStr = `Bearer ${Keys.ASANA_BEARER_TOKEN}`;
    const projectId = this.props.project;
    axios
      .get(`https://app.asana.com/api/1.0/projects/${projectId}/tasks?opt_fields=notes,name`, {
        headers: { Authorization: AuthStr }
      })
      .then(response => {
        this.setState({ tasks: response.data.data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  markAsDone = taskToRemoveId => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskToRemoveId)
    }));
  };

  render() {
    return (
      <div>
        {this.state.error ? (
          <NotFound />
        ) : (
          <TaskList tasks={this.state.tasks} markAsDone={this.markAsDone} />
        )}
      </div>
    );
  }
}
