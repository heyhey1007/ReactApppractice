import React from "react";
import { render } from "react-dom";
import { Todo } from "./Todo.model";
import TodoApp from "./TodoApp";

// const deleteTargetId = 2;
// const deletedArray: Todo[] = todosArray.filter(
//   (todo) => todo.id !== deleteTargetId
// );

// const Todos = ({ todos }) => {
//   const list = todos.map((todo) => {
//     return (
//       <li>
//         {todo.id} {todo.tilte}
//       </li>
//     );
//   });
//   return <ul>{list}</ul>;
// };
render(<TodoApp />, document.getElementById("root"));
