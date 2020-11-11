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
      todos: [],
      nextId: 0
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

  addTodo = (title: string) => {
    const { todos, nextId } = this.state;
    this.setState({
      todos: [...todos, new Todo(nextId + 1, title)],
      nextId: nextId + 1
    });
  };

  deleteTodo = (id: number) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
      nextId: this.state.nextId
    });
  };
}
export default TodoApp;
