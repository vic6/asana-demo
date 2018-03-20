import React, { Component } from 'react';
import axios from 'axios';
import Keys from '../Keys';
import TaskListContainer from './TaskListContainer';
import Header from './Header';

export default class App extends Component {

  componentDidMount() {
    const AuthStr = `Bearer ${Keys.ASANA_BEARER_TOKEN}`;
    axios
      .get('https://app.asana.com/api/1.0/projects/597581411344319', {
        headers: { Authorization: AuthStr }
      })
      .then(response => {
        this.setState({ tasks: response.data.name });
        console.log(response.data.data.name)
      });
  }

  render() {
    return (
      <div>
        <Header />
        <TaskListContainer />
      </div>
    )
  }
}
