import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';
import PropTypes from 'prop-types';

 class Todo extends Component {
 
//  Add idividual Todos

render() {
    return (
      this.props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markCompleted}
          delete={this.props.deleteTodo} />
       ) 
      )
    );
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired 
};


export default Todo;

