import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import axios from 'axios';
import Keys from '../Keys';

export default class Header extends Component {
  state = {};
  componentDidMount() {
    const AuthStr = `Bearer ${Keys.ASANA_BEARER_TOKEN}`;
    const projectId = this.props.project;
    axios
      .get(`https://app.asana.com/api/1.0/projects/${projectId}`, {
        headers: { Authorization: AuthStr }
      })
      .then(response => {
        this.setState({ name: response.data.data.name });
      })
      .catch(() => {
        this.setState({ name: 'Invalid Project ID' });
      });
  }

  render() {
    return (
      <Menu borderless>
        <Menu.Item style={{ padding: '0px' }}>
          <img className="ui small image" src="/public/images/logo.png" alt="logo" />
        </Menu.Item>

        <Menu.Item style={{ fontSize: '1.5rem' }} name={this.state.name} />
      </Menu>
    );
  }
}
