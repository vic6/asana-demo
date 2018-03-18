import React, { Component } from 'react';
import axios from 'axios';
import Keys from '../Keys';

export default class TaskList extends Component {
  state = {};
  componentDidMount() {
    const AuthStr = `Bearer ${Keys.ASANA_BEARER_TOKEN}`;
    axios
      .get('https://app.asana.com/api/1.0/projects/597581411344319/tasks', {
        headers: { Authorization: AuthStr }
      })
      .then(response => {
        this.setState({tasks: response.data.data});
      });

    // let data = axios.get('https://app.asana.com/api/1.0/projects/597581411344319/tasks')
    // console.log(data);
  }

  render() {
    const data = JSON.stringify(this.state, null, 4);

    return (
      <div>
        {this.state && <pre>{data}</pre>}
      </div>
    );
  }
}
