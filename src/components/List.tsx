import React from "react";
import { render } from "react-dom";
import { Todo } from "../Todo.model";

interface ListProps {
  todos: Todo[];
}

const List: React.FC<ListProps> = (props) => {
  const list = props.todos.map((todo) => {
    return (
      <li>
        {" "}
        #{todo.id} {todo.title}
      </li>
    );
  });
  return (
    <>
      <h2>List</h2>
      <ul>{list}</ul>
    </>
  );
};
export default List;
