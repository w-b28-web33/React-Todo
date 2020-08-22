import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todo from '../components/Todo'


class TodoItem extends Component  {

    

getStyle = _ => {
      return {
        padding: '10px',
        background: '#f4f4f4',
        borderBottom: '1px #ccc Solid',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    }
    

    

  render() {
  console.log(this.props.todo)
 
    const { id, task} = this.props.todo
    
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox"  />
            
        <button onClick={this.deleteTodo} style={btnStyle}>X</button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
  };

const btnStyle = {
  background: '#ff0000',
  color: 'white',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
