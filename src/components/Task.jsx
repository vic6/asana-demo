import React from 'react';
import { Button, List } from 'semantic-ui-react';

const Task = ({ name, id, markAsDone }) => (
  <div>
    <List.Content style={{ color: 'black' }} floated="left" as="li" key={id}>
      {name}
    </List.Content>
    <List.Content floated="right">
      <Button
        onClick={() => {
          markAsDone(id);
        }}>
        Mark Done
      </Button>
    </List.Content>
  </div>
);

export default Task;
