import React from 'react';
import { Button, List } from 'semantic-ui-react';

const Task = ({ name, note, id, markAsDone }) => {
  return (
    <div>
      <List.Content floated="left" as="li" key={id}>
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
};

export default Task;

// id, name, note
// export default class Task extends Component {
//   render() {
//     const { name, note, id } = this.props;
//     return (
//       <li key={id}>{name}</li>
//     )
//   }
// }
