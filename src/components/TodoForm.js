import React from "react";

class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todoText: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
    );
  }
}
export default TodoForm;