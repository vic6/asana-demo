import React from 'react';
import { Container, List } from 'semantic-ui-react';
import TaskContainer from './TaskContainer';

const TaskList = ({tasks, markAsDone}) => {
  // const data = JSON.stringify(this.props.tasks, null, 4);
  let list = tasks;

  if (list) {
    list = list.map(task => (
      // <List.item>
      <TaskContainer
        name={task.name}
        note={task.notes}
        id={task.id}
        key={task.id}
        markAsDone={markAsDone}
      />
      // </List.item>
    ));
  }
  return (
    <Container>
      <List selection verticalAlign="middle" as="ol" celled>
        {list}
      </List>
    </Container>
  );
};

export default TaskList;

// export default class TaskList extends Component {
//   render() {
//     // const data = JSON.stringify(this.props.tasks, null, 4);
//     let list = this.props.tasks;
//     const markAsDone = this.props.markAsDone;
//     if (list) {
//       list = list.map(task => (
//         // <List.item>
//         <TaskContainer name={task.name} note={task.notes} id={task.id} key={task.id} markAsDone={markAsDone} />
//         // </List.item>
//       ));
//     }
//
//     return (
//       <Container>
//         <List selection verticalAlign="middle" as="ol" celled>
//           {list}
//         </List>
//       </Container>
//     );
//   }
// }
