import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {uuidv4 as uuid}from "uuidv4";
import "./Todo.css";

const todos = [
  { 
    task: "Organize Garage", 
    id: uuid,
    completed: false, 
    },
  {
    task: "Bake Cookies",
    id: uuid,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      todos: todos,
    };
  }

  deleteCompleted = _ => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.completed === false;
      }),
    });
  };

  toggleItem = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addTodo = item => {
    const newTodo = {
      task: item,
      id: uuid,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <h2>Forsaken React Todo App with classes</h2>
          <TodoList
            todos={this.state.todos}
            toggleItem={this.toggleItem}
            deleteCompleted={this.deleteCompleted}
          />
          
          <TodoForm 
            addTodo={this.addTodo} 
          />
        </div>
      </div>
    );
  }
}

export default App;