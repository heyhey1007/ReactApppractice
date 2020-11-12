import React from "react";
import { Todo } from "../Todo.model";

interface AddTodoProps {
  addTodo: Function;
}
interface AddTodoState {
  id?: number;
  title: string;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Add to Todo" />
        </form>
      </>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    return this.setState({ title: title });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
export default AddTodo;
