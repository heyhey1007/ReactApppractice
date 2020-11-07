import React from "react";
import { render } from "react-dom";
import AddTodo from "./components/AddTodo";
import List from "./components/List";
import { Todo } from "./Todo.model";

interface TodoAppProps {}
interface TodoAppState {
  todos: Todo[];
  nextId: number;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        new Todo(1, "title1"),
        new Todo(2, "title2"),
        new Todo(3, "title3"),
        new Todo(4, "title4")
      ],
      nextId: 0
    };
  }
  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo />
        <List todos={this.state.todos} />
      </div>
    );
  }
}
export default TodoApp;
