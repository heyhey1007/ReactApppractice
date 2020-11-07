import React from "react";
import { render } from "react-dom";
import { Todo } from "../Todo.model";

interface ListProps {
  todos: Todo[];
}

const List: React.FC<ListProps> = (props) => {
  return (
    <>
      <h2>List</h2>
    </>
  );
};
export default List;
