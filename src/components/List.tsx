import React from "react";
import { Todo } from "../Todo.model";

interface ListProps {
  todos: Todo[];
  deleteTodo: Function;
}
interface ListState {}

const List = class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
  }

  render() {
    const { deleteTodo, todos } = this.props;
    const list = todos.map((todo) => {
      return (
        <li key={todo.id}>
          {" "}
          #{todo.id} {todo.title}
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
    return (
      <>
        <h2>List</h2>
        <ul>{list}</ul>
      </>
    );
  }
};
export default List;
