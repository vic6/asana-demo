import React from 'react';

const Task = ({name, note, id}) => (
  <li key={id}>{name}</li>
)

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
