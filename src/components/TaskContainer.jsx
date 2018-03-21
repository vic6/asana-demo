import React, { Component } from 'react';
import { List, Popup } from 'semantic-ui-react';
import Task from './Task';

export default class TaskContainer extends Component {
  render() {
    const { name, note, markAsDone, id } = this.props;

    return (
      <Popup
        trigger={
          <List.Item>
            <Task testing={this.testing} id={id} name={name} note={note} markAsDone={markAsDone} />
          </List.Item>
        }
        content={note}
        on="click"
        position="bottom left"
      />
    );
  }
}
