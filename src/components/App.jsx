import React, { Component } from 'react';
import axios from 'axios';
import Keys from '../Keys';
import TaskListContainer from './TaskListContainer';
import Header from './Header';

export default class App extends Component {

  // componentDidMount() {
  //   const AuthStr = `Bearer ${Keys.ASANA_BEARER_TOKEN}`;
  //   const projectId = this.props.match.params.id
  //   // 597581411344319
  //   console.log(projectId)
  //   axios
  //     .get(`https://app.asana.com/api/1.0/projects/${projectId}`, {
  //       headers: { Authorization: AuthStr }
  //     })
  //     .then(response => {
  //       this.setState({ tasks: response.data.name });
  //       console.log(response.data.data.name)
  //     });
  // }

  render() {
    return (
      <div>
        <Header project={this.props.match.params.id} />
        <TaskListContainer project={this.props.match.params.id} />
      </div>
    )
  }
}
